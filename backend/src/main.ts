// import * as dotenv from 'dotenv';

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.SERVICE_PORT);
  console.log("Service started at port: ", process.env.SERVICE_PORT);
}
bootstrap();
