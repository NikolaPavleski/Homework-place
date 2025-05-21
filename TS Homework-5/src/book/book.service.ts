import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from './book.entity';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepo: Repository<Book>,
  ) {}

  async create(createBookDto: CreateBookDto): Promise<Book> {
    const book = this.bookRepo.create(createBookDto);
    return this.bookRepo.save(book);
  }

  async findAll(filters?: any, sort: string = 'title'): Promise<Book[]> {
    const query = this.bookRepo.createQueryBuilder('book');

    if (filters?.categoryId) {
      query.andWhere('book.categoryId = :categoryId', { categoryId: filters.categoryId });
    }

    if (filters?.author) {
      query.andWhere('book.author ILIKE :author', { author: `%${filters.author}%` });
    }

    if (filters?.available !== undefined) {
      query.andWhere('book.available = :available', { available: filters.available });
    }

    query.orderBy(`book.${sort}`, 'ASC');

    return query.getMany();
  }

  async findOne(id: number): Promise<Book> {
    const book = await this.bookRepo.findOne({ where: { id }, relations: ['category'] });
    if (!book) {
      throw new Error('Book not found');
    }
    return book;
  }

  async update(id: number, updateBookDto: UpdateBookDto): Promise<Book> {
    const book = await this.bookRepo.findOne({ where: { id } });
    if (!book) throw new Error('Book not found');

    Object.assign(book, updateBookDto);
    return this.bookRepo.save(book);
  }

  async remove(id: number): Promise<void> {
    const result = await this.bookRepo.delete(id);
    if (result.affected === 0) {
      throw new Error('Book not found');
    }
  }
}