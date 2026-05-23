import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { createClient } from '@supabase/supabase-js';

// Setup Supabase Client
const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';

// Basic Rate Limit Store (In Memory)
const rateLimitStore = new Map<string, { count: number, timestamp: number }>();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5;

async function startServer() {
  const app = express();
  const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json());

  // Rate Limiting Middleware
  const rateLimiter = (req: express.Request, res: express.Response, next: express.NextFunction) => {
    const ip = req.ip || req.socket.remoteAddress || 'unknown';
    const now = Date.now();
    const record = rateLimitStore.get(ip);
    
    if (record && now - record.timestamp < RATE_LIMIT_WINDOW_MS) {
      if (record.count >= MAX_REQUESTS_PER_WINDOW) {
        return res.status(429).json({ error: 'Too many requests, please try again later.' });
      }
      record.count += 1;
    } else {
      rateLimitStore.set(ip, { count: 1, timestamp: now });
    }
    next();
  };

  // API Route: Contact Form Submission
  app.post('/api/contact', rateLimiter, async (req, res) => {
    try {
      const { name, company, phone, email, budget, services, message } = req.body;

      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required fields.' });
      }

      if (!supabaseUrl || !supabaseServiceKey) {
        console.error('Supabase credentials missing. Mocking success.');
        return res.json({ success: true, mocked: true });
      }

      const supabase = createClient(supabaseUrl, supabaseServiceKey);
      
      const { data, error } = await supabase
        .from('leads')
        .insert([
          { 
            name, 
            company, 
            phone, 
            email, 
            budget, 
            services_interested: services, 
            message,
            status: 'New',
            created_at: new Date().toISOString()
          }
        ])
        .select();

      if (error) {
        console.error('Supabase Insert Error:', error);
        return res.status(500).json({ error: 'Failed to submit lead.' });
      }

      res.status(200).json({ success: true, lead: data[0] });
    } catch (err) {
      console.error('Contact endpoint error:', err);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });


  // Vite integration
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
}

startServer();
