import { Injectable, NotFoundException, Req } from '@nestjs/common';
import prisma from '../../database/database';
import { CreateUserDto } from './dto';
import { User, ResMsg } from '../../types';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  signup({ email, name, password }) {
    bcrypt.hash(password, 10, async (err, encrypted) => {
      if (err) {
        return console.error(err);
      }
      try {
        await prisma.user.create({
          data: {
            email,
            name,
            password: encrypted,
          },
        });
        return 'Success';
      } catch (err) {
        console.error(err);
      }
    });
  }
  async login({ email, password }, req) {
    const user = await prisma.user.findFirst({
      where: { email },
    });
    bcrypt.compare(password, user.password, (err, isSame) => {
      console.log('isSame?:', isSame);
      if (err) {
        return console.error(err);
      }
      if (isSame) {
        console.log(req.session);
      }
    });
  }
  logout() {
    return '';
  }
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
