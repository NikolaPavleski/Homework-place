import fs from 'fs';
import path from 'path';
const booksDbPath = path.resolve('books_store.db.json'); 
export const readBooks = () => {
  try {
    console.log("Reading from file:", booksDbPath);
    const data = fs.readFileSync(booksDbPath, 'utf-8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error reading books data:', err);
    return [];
  }
};
export const writeBooks = (books) => {
  try {
    console.log("Writing to file:", booksDbPath);
    fs.writeFileSync(booksDbPath, JSON.stringify(books, null, 2), 'utf-8');
  } catch (err) {
    console.error('Error writing books data:', err);
  }
};