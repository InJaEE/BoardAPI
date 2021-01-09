import { Module } from '@nestjs/common';
import { AppController } from './module/app.controller';
import { AppService } from './module/app.service';
import { UserModule } from './module/user/user.module';
import { PostModule } from './module/post/post.module';

@Module({
  imports: [UserModule, PostModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
