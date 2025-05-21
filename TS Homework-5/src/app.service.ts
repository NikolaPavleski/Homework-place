import { Injectable, OnModuleInit } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book/book.entity';
import { Category } from './category/category.entity';

@Injectable()
export class AppService implements OnModuleInit {
  constructor(
    @InjectRepository(Book) private bookRepo: Repository<Book>,
    @InjectRepository(Category) private categoryRepo: Repository<Category>,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async onModuleInit() {
    const category = await this.categoryRepo.findOne({ where: { id: 1 } });

    if (!category) {
      console.log('No category found. Please add a category first.');
      return;
    }

    const existingBook = await this.bookRepo.findOne({ where: { isbn: '9780747532699' } });
    
    if (!existingBook) {
      const newBook = this.bookRepo.create({
        title: "Harry Potter and the Sorcerer's Stone",
        author: 'J.K. Rowling',
        publicationYear: 1997,
        isbn: '9780747532699',
        description: 'A fantasy novel about a young wizard',
        available: true,
        category,
      });
      
      await this.bookRepo.save(newBook);
      console.log('Book successfully added:', newBook);
    }
  }
}