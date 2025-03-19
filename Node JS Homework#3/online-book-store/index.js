import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url'; 
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
app.get('/books', (req, res) => {
  const books = JSON.parse(fs.readFileSync('books_store.db.json', 'utf-8'));
  res.json(books);
});
app.post('/books', (req, res) => {
  const { bookTitle, isAvailable, genre, author, pages } = req.body;
  const books = JSON.parse(fs.readFileSync('books_store.db.json', 'utf-8'));
  const newBook = {
    id: (books.length + 1).toString(),
    bookTitle,
    isAvailable,
    genre,
    author,
    pages
  };
  books.push(newBook);
  fs.writeFileSync('books_store.db.json', JSON.stringify(books, null, 2));
  res.status(201).json(newBook);
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});