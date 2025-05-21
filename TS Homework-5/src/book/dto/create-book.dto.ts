import { IsString, IsInt, IsBoolean } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsInt()
  publicationYear: number;

  @IsString()
  isbn: string;

  @IsString()
  description: string;

  @IsBoolean()
  available: boolean;

  @IsInt()
  categoryId: number;
}