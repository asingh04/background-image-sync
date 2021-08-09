import { Module } from "@nestjs/common";
import { PostsService } from "./posts.service";
import { PostsController } from "./posts.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Post } from "./post.entity";
import { Tag } from "src/tags/tag.entity";
import { PostTags } from "src/postTags/postTags.entity";
@Module({
  imports: [TypeOrmModule.forFeature([Post, Tag, PostTags])],
  providers: [PostsService],
  controllers: [PostsController]
})
export class PostsModule {}
