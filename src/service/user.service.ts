import { Injectable } from '@nestjs/common';
import prisma from '../database/database';
import { User } from '../types';

@Injectable()
export class UserService {
  async getUsers(): Promise<User[]> {
    try {
      const users = await prisma.user.findMany();
      return users;
    } catch (err) {
      console.error(err);
    }
  }
  async getUser(param): Promise<User> {
    const { name } = param;
    try {
      const user = await prisma.user.findFirst({
        where: { name },
      });
      return user;
    } catch (err) {
      console.error(err);
    }
  }
  async createUser(body) {
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
  async updateUser(body) {
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
