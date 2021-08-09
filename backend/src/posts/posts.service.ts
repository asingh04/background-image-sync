import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Post } from "./post.entity";
import { Tag } from "./../tags/tag.entity";
import { PostTags } from "./../postTags/postTags.entity";

@Injectable()
export class PostsService {
  constructor(
    @InjectRepository(Post) private postsRepository: Repository<Post>,
    @InjectRepository(Tag) private tagsRepository: Repository<Tag>,
    @InjectRepository(PostTags) private postTagsRepository: Repository<PostTags>
  ) {}

  // getSpecificPost(postId?:string) {
  //   this.postsRepository.find()
  // }
  getPosts(): Promise<Array<Post>> {
    return this.postsRepository.find();
  }

  async getSpecificPost(postId: string): Promise<Post> {
    try {
      const post = this.postsRepository.findOneOrFail({ id: postId });
      if (post) {
        return post;
      }
      return null;
    } catch (e) {
      return null;
    }
  }

  async createPost(
    title: string,
    description: string,
    tags: Array<string>
  ): Promise<Post> {
    const newPost = this.postsRepository.create({ title, description });

    if (tags?.length) {
      await Promise.all(
        tags.map(async (tagName) => {
          const tagRecord = await this.tagsRepository.findOne({
            name: tagName
          });

          if (tagRecord?.id) {
            const postTag = this.postTagsRepository.create({
              postId: newPost.id,
              tagId: tagRecord.id
            });
            return this.postTagsRepository.save(postTag);
          }
          const newTag = this.tagsRepository.create({ name: tagName });
          await this.tagsRepository.save(newTag);

          const newPostTag = this.postTagsRepository.create({ postId: newPost.id, tagId: newTag.id })

          return this.postTagsRepository.save(newPostTag);
        })
      );
    }

    return this.postsRepository.save(newPost);
  }
}
