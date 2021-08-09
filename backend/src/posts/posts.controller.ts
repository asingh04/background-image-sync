import { BadRequestException, Body, NotFoundException } from "@nestjs/common";
import { Controller, Get, Param, Post as PostRequest } from "@nestjs/common";
import { Post } from "./post.entity";
import { PostsService } from "./posts.service";

@Controller("/posts")
export class PostsController {
  constructor(private postsService: PostsService) {}

  @Get()
  getAllPosts(): Promise<Array<Post>> {
    return this.postsService.getPosts();
  }

  @Get(":id")
  async getPost(@Param("id") id?: string): Promise<Post> {
    if (!id) {
      throw new BadRequestException();
    }
    const post = await this.postsService.getSpecificPost(id);

    if (!post) {
      throw new NotFoundException();
    }

    return post;
  }
  @PostRequest()
  async createNewPost(
    @Body("title") title?: string,
    @Body("description") description?: string,
    @Body("tags") tags: Array<string>
  ): Promise<Post> {
    return this.postsService.createPost(title, description, tags);
  }
}
