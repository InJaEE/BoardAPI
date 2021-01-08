import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log('Request?');
    console.log(req.query);
    // if(!req.user.isAdmin)
    next();
  }
}

export function auth(req: Request, res: Response, next: NextFunction) {
  console.log('Request?');
  console.log(req.query);
  // if(!req.user.isAdmin)
  next();
}
