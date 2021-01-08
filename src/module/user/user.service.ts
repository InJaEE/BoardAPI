import { Injectable, NotFoundException } from '@nestjs/common';
import prisma from '../../database/database';
import { CreateUserDto } from './dto';

import { User, ResMsg } from '../../types';

@Injectable()
export class UserService {
  async getUsers(): Promise<User[]> {
    const users = await prisma.user.findMany();
    console.log(users);
    return users;
  }
  async getUser(param): Promise<ResMsg | NotFoundException> {
    const { name } = param;
    const user = await prisma.user.findFirst({
      where: { name },
    });
    if (!user) {
      throw new NotFoundException('Error occured!');
    }
    return {
      data: user,
      status: 200,
      message: 'Success',
    };
  }
  async createUser(body: CreateUserDto) {
    const { name, email } = body;
    try {
      await prisma.user.create({
        data: {
          name,
          email,
        },
      });
      return `User ${name}, ${email} create success!`;
    } catch (err) {
      console.error(err);
    }
  }
  async updateUser(body: CreateUserDto): Promise<string> {
    const { id, name, email } = body;
    try {
      await prisma.user.update({
        where: {
          id,
        },
        data: {
          name,
          email,
        },
      });
      return `Update Success!`;
    } catch (err) {
      console.error(err);
    }
  }
  async deleteUser({ id }) {
    try {
      await prisma.user.delete({
        where: { id },
      });
      return `Delete Success!`;
    } catch (err) {
      console.error(err);
    }
  }
}
