import {
  Module,
  NestModule,
  MiddlewareConsumer,
  RequestMethod,
} from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { LoggerMiddleware } from '../../middleware/logger.middleware';
import { AuthMiddleware } from '../../middleware/auth.middleware';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserService],
  exports: [],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(LoggerMiddleware)
      .forRoutes({ path: 'user', method: RequestMethod.GET });
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: 'user3', method: RequestMethod.GET });
  }
}
