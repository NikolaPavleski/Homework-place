import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoryRepo: Repository<Category>,
  ) {}

  findAll() {
    return this.categoryRepo.find();
  }

  findOne(id: number) {
    return this.categoryRepo.findOne({ where: { id }, relations: ['books'] });
  }

  create(dto: CreateCategoryDto) {
    console.log(dto);
    const category = this.categoryRepo.create(dto);
    return this.categoryRepo.save(category);
  }

  async update(id: number, dto: UpdateCategoryDto) {
    const category = await this.categoryRepo.preload({ id, ...dto });
    if (!category) throw new NotFoundException('Category not found');
    return this.categoryRepo.save(category);
  }

  async remove(id: number) {
    const category = await this.categoryRepo.findOneBy({ id });
    if (!category) throw new NotFoundException('Category not found');
    return this.categoryRepo.remove(category);
  }
}