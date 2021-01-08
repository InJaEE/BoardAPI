import { Module } from '@nestjs/common';
import { AppController } from './module/app.controller';
import { AppService } from './module/app.service';
import { UserModule } from './module/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
