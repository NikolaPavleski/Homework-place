import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './book.entity';
import { Category } from '../category/category.entity';
import { BookService } from './book.service';
import { BookController } from './book.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Book, Category])],
  providers: [BookService],
  controllers: [BookController],
})
export class BookModule {}