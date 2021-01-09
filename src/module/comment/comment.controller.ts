import { Controller, Post, Put, Delete } from '@nestjs/common';
import { CommentService } from './comment.service';

@Controller('/comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}
  @Post()
  createComment() {
    return '';
  }
  @Put()
  updateComment() {
    return '';
  }
  @Delete()
  deleteComment() {
    return '';
  }
}
