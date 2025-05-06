import { Controller, Get, Post as HttpPost, Param, Body, Put, Delete } from '@nestjs/common';
import { PostsService, Post as PostModel } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}
  @Get()
  getAll() {
    return this.postsService.findAll();
  }
  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.postsService.findOne(+id);
  }
  @HttpPost()
  create(@Body() body: Omit<PostModel, 'id'>) {
    return this.postsService.create(body);
  }
  @Put(':id')
  update(@Param('id') id: string, @Body() body: Partial<PostModel>) {
    return this.postsService.update(+id, body);
  }
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.postsService.delete(+id);
  }
}