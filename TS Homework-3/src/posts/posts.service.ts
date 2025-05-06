import { Injectable, NotFoundException } from '@nestjs/common';

export interface Post {
  id: number;
  title: string;
  content: string;
  authorId: number;
}
@Injectable()
export class PostsService {
  private posts: Post[] = [
    { id: 1, title: 'Hello World', content: 'My first post', authorId: 1 },
  ];
  findAll(): Post[] {
    return this.posts;
  }
  findOne(id: number): Post {
    const post = this.posts.find(p => p.id === id);
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }
  create(post: Omit<Post, 'id'>): Post {
    const newPost: Post = {
      id: Date.now(),
      ...post,
    };
    this.posts.push(newPost);
    return newPost;
  }
  update(id: number, updatePost: Partial<Post>): Post {
    const post = this.findOne(id);
    Object.assign(post, updatePost);
    return post;
  }
  delete(id: number): void {
    const index = this.posts.findIndex(p => p.id === id);
    if (index === -1) throw new NotFoundException('Post not found');
    this.posts.splice(index, 1);
  }
}