import { Controller, Get, Post, Body, Param, Put, Delete, Query } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Controller('books')
export class BookController {
  constructor(private readonly service: BookService) {}

  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    return this.service.create(createBookDto);
  }

  @Get()
  async findAll(
    @Query('categoryId') categoryId: string,
    @Query('author') author: string,
    @Query('available') available: string,
    @Query('sort') sort: string,
  ) {
    const filters = {
      categoryId: categoryId ? +categoryId : undefined,
      author,
      available: available !== undefined ? available === 'true' : undefined,
    };

    return this.service.findAll(filters, sort);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateBookDto: UpdateBookDto) {
    return this.service.update(+id, updateBookDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}