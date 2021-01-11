import { Module } from '@nestjs/common';
import { AppController } from './module/app.controller';
import { AppService } from './module/app.service';
import { UserModule } from './module/user/user.module';
import { PostModule } from './module/post/post.module';
import { AuthModule } from './module/auth/auth.module';
import { UsersModule } from './module/users/users.module';

@Module({
  imports: [UserModule, PostModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
