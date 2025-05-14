import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { RoomsService } from './rooms.service';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@ApiTags('Rooms')
@Controller('rooms')
export class RoomsController {
  constructor(private readonly roomsService: RoomsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new room' })
  create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomsService.create(createRoomDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all rooms' })
  findAll() {
    return this.roomsService.findAll();
  }

  @Get(':roomNumber')
  @ApiOperation({ summary: 'Get a room by number' })
  findOne(@Param('roomNumber', ParseIntPipe) roomNumber: number) {
    return this.roomsService.findOne(roomNumber);
  }

  @Put(':roomNumber')
  @ApiOperation({ summary: 'Update a room by number' })
  update(
    @Param('roomNumber', ParseIntPipe) roomNumber: number,
    @Body() updateRoomDto: UpdateRoomDto,
  ) {
    return this.roomsService.update(roomNumber, updateRoomDto);
  }

  @Delete(':roomNumber')
  @ApiOperation({ summary: 'Delete a room by number' })
  remove(@Param('roomNumber', ParseIntPipe) roomNumber: number) {
    return this.roomsService.remove(roomNumber);
  }
}