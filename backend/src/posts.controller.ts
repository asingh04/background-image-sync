import { Controller, Get } from "@nestjs/common";

@Controller()
export class PostsController{
    constructor(private postService: PostService) {}

    @Get()
    getAllPosts()
}