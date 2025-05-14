import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRoomDto, RoomType } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';

@Injectable()
export class RoomsService {
  private rooms = new Map<number, CreateRoomDto>();

  create(createRoomDto: CreateRoomDto) {
    if (this.rooms.has(createRoomDto.roomNumber)) {
      throw new Error('Room with this number already exists.');
    }
    this.rooms.set(createRoomDto.roomNumber, createRoomDto);
    return createRoomDto;
  }

  findAll() {
    return Array.from(this.rooms.values());
  }

  findOne(roomNumber: number) {
    const room = this.rooms.get(roomNumber);
    if (!room) throw new NotFoundException('Room not found');
    return room;
  }

  update(roomNumber: number, updateRoomDto: UpdateRoomDto) {
    const existingRoom = this.rooms.get(roomNumber);
    if (!existingRoom) throw new NotFoundException('Room not found');

    const updated = { ...existingRoom, ...updateRoomDto };
    this.rooms.set(roomNumber, updated);
    return updated;
  }

  remove(roomNumber: number) {
    if (!this.rooms.delete(roomNumber)) {
      throw new NotFoundException('Room not found');
    }
    return { message: 'Room deleted successfully' };
  }
}