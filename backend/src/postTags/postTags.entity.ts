import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { Post } from "./../posts/post.entity";
import { Tag } from "./../tags/tag.entity";

@Entity()
export class PostTags {
  @PrimaryColumn()
  postId: string;

  @PrimaryColumn()
  tagId: string;

  @ManyToOne(() => Post, (post) => post.id)
  @JoinColumn({ name: "postId" })
  public post: Post;

  @ManyToOne(() => Tag, (tag) => tag.id)
  @JoinColumn({ name: "tagId" })
  public tag: Tag;
}
