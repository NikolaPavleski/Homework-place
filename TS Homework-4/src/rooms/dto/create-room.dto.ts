import { IsBoolean, IsEnum, IsInt, IsNumber, Max, Min } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum RoomType {
  SINGLE = 'SINGLE',
  DOUBLE = 'DOUBLE',
  SUITE = 'SUITE',
  DELUXE = 'DELUXE',
}

export class CreateRoomDto {
  @ApiProperty({ example: 101, minimum: 1, maximum: 999 })
  @IsInt()
  @Min(1)
  @Max(999)
  roomNumber: number;

  @ApiProperty({ enum: RoomType })
  @IsEnum(RoomType)
  type: RoomType;

  @ApiProperty({ example: 150, minimum: 50, maximum: 1000 })
  @IsNumber()
  @Min(50)
  @Max(1000)
  price: number;

  @ApiProperty({ example: true })
  @IsBoolean()
  isAvailable: boolean;
}