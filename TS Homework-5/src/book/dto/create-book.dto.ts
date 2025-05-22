import { IsString, IsInt, IsBoolean, IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsInt()
  publicationYear: number;

  @IsString()
  @IsNotEmpty()
  isbn: string;

  @IsString()
  description: string;

  @IsBoolean()
  available: boolean;

  @IsInt()
  categoryId: number;
}