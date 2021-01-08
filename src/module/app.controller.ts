import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import prisma from '../database/database';
import { User } from '../types';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('/user')
  async createUser(@Body() body) {
    const { name, email } = body;
    await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    return `Create User Success!\rUser info: name: ${name}, email: ${email}`;
  }
}
