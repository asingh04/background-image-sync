import { Injectable } from "@nestjs/common";
import { Post } from "./post.entity";

@Injectable()
export class PostsService {
  getPosts(postId: string): Array<Post> {
    if (postId) {
      return [];
    }
    return [];
  }
}
