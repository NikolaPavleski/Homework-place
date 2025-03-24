import { BookModel } from '../models/bookModel.js';
export const getBooks = (req, res) => {
  const books = BookModel.getAllBooks();
  res.json(books);
};
export const getBookById = (req, res) => {
  const book = BookModel.getBookById(req.params.id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
};
export const addBook = (req, res) => {
  const { bookTitle, isAvailable, genre, author, pages } = req.body;
  const newBook = {
    id: (Date.now()).toString(),
    bookTitle,
    isAvailable,
    genre,
    author,
    pages
  };
  
  const addedBook = BookModel.addBook(newBook);
  res.status(201).json(addedBook);
};
export const updateBook = (req, res) => {
  const updatedBook = BookModel.updateBook(req.params.id, req.body);
  if (updatedBook) {
    res.json(updatedBook);
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
};
export const deleteBook = (req, res) => {
  const success = BookModel.deleteBook(req.params.id);
  if (success) {
    res.status(200).json({ message: 'Book deleted successfully' });
  } else {
    res.status(404).json({ message: 'Book not found' });
  }
};