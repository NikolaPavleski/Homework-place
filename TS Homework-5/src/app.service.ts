import { Injectable, OnModuleInit } from '@nestjs/common';
import { BookService } from './book/book.service';
import { CategoryService } from './category/category.service';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    private readonly bookService: BookService,
    private readonly categoryService: CategoryService,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async onModuleInit() {
    const category = await this.categoryService.findOne(1);
    if (!category) {
      console.warn('No category found. Please add one.');
      return;
    }

    const existingBook = await this.bookService.findByIsbn('9780747532699');
    if (!existingBook) {
      await this.bookService.create({
        title: "Harry Potter and the Sorcerer's Stone",
        author: 'J.K. Rowling',
        publicationYear: 1997,
        isbn: '9780747532699',
        description: 'A fantasy novel about a young wizard',
        available: true,
        categoryId: category.id,
      });
      console.log('Book successfully added.');
    }
  }
}