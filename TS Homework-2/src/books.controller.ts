import {
    Controller,
    Get,
    Post,
    Put,
    Delete,
    Param,
    Body,
    Query,
    HttpException,
    HttpStatus,
  } from '@nestjs/common';
  interface Book {
    id: number;
    title: string;
    author: string;
    price: number;
  }
  @Controller('api/books')
  export class BooksController {
    private books: Book[] = [
      { id: 1, title: 'Strange Case of Dr Jekyll and Mr Hyde', author: 'Robert Louis Stevenson', price: 15 },
      { id: 2, title: 'The Shining', author: 'Stephen King', price: 8 },
      { id: 3, title: 'IT', author: 'Stephen King', price: 20 },
    ];
    @Get()
  getBooks(
    @Query('minPrice') minPrice?: string,
    @Query('author') author?: string,
  ): Book[] {
    let filteredBooks = this.books;

    if (minPrice) {
      const min = parseFloat(minPrice);
      if (!isNaN(min)) {
        filteredBooks = filteredBooks.filter((book) => book.price >= min);
      }
    }

    if (author) {
      filteredBooks = filteredBooks.filter(
        (book) =>
          book.author &&
          book.author.toLowerCase() === author.toLowerCase(),
      );
    }

    return filteredBooks;
  }
  @Get(':id')
  getBookById(@Param('id') id: string): Book {
    const book = this.books.find((b) => b.id === +id);
    if (!book) {
      throw new HttpException('Book not found', HttpStatus.NOT_FOUND);
    }
    return book;
  }
  @Post()
  createBook(@Body() newBook: Omit<Book, 'id'>): Book {
    const id = this.books.length
      ? Math.max(...this.books.map((b) => b.id)) + 1
      : 1;
    const book: Book = { id, ...newBook };
    this.books.push(book);
    return book;
  }
  @Put(':id')
  updateBook(@Param('id') id: string, @Body() update: Partial<Book>): Book {
    const index = this.books.findIndex((b) => b.id === +id);
    if (index === -1) {
      throw new HttpException('Book not found', HttpStatus.NOT_FOUND);
    }
    this.books[index] = { ...this.books[index], ...update };
    return this.books[index];
  }
  @Delete(':id')
  deleteBook(@Param('id') id: string): { message: string } {
    const index = this.books.findIndex((b) => b.id === +id);
    if (index === -1) {
      throw new HttpException('Book not found', HttpStatus.NOT_FOUND);
    }
    this.books.splice(index, 1);
    return { message: 'Book deleted successfully' };
  }
}