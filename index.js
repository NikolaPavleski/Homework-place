import express from 'express'; 
import path from 'path';
import { fileURLToPath } from 'url';
import bookRoutes from './routes/bookRoutes.js';
import fs from 'fs';
const app = express();
const PORT = 3000;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const logRequest = (req, res, next) => {
  const log = {
    timestamp: new Date(),
    method: req.method,
    url: req.originalUrl
  };
  const logPath = path.join(__dirname, 'logs.json');
  fs.readFile(logPath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const logs = JSON.parse(data || '[]');
    logs.push(log);
    
    fs.writeFile(logPath, JSON.stringify(logs, null, 2), 'utf8', (err) => {
      if (err) console.error(err);
    });
  });
  next();
};
app.use(express.json());
app.use(logRequest);
app.use('/api', bookRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});