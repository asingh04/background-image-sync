import { Controller, Get, Post as PostRequest } from "@nestjs/common";
import { Post } from "./post.entity";
import { PostsService } from "./posts.service";

@Controller("/posts")
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  getAllPosts(): Array<Post> {
    return this.postsService.getPosts("124");
  }

  @PostRequest()
  createNewPost(): Record<string, string> {
    return {};
  }
}
