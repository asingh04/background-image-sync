import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import config from "./../ormconfig";
import { ConfigModule } from "@nestjs/config";
import { PostsModule } from "./posts/posts.module";

@Module({
  imports: [ConfigModule.forRoot(), TypeOrmModule.forRoot(config), PostsModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
