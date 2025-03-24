import { readBooks, writeBooks } from '../services/database.service.js';
export class BookModel {
  static getAllBooks() {
    return readBooks();
  }
  static getBookById(id) {
    const books = readBooks();
    return books.find(book => book.id === id);
  }
  static addBook(newBook) {
    const books = readBooks();
    books.push(newBook);
    writeBooks(books);
    return newBook;
  }
  static updateBook(id, updatedBook) {
    const books = readBooks();
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
      books[index] = { ...books[index], ...updatedBook };
      writeBooks(books);
      return books[index];
    }
    return null;
  }
  static deleteBook(id) {
    let books = readBooks();
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
      books = books.filter(book => book.id !== id);
      writeBooks(books);
      return true;
    }
    return false;
  }
}