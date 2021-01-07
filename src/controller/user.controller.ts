import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { UserService } from '../service/user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }
  @Get(':name')
  async getUser(@Param() param) {
    return this.userService.getUser(param);
  }
  @Post()
  createUser(@Body() body) {
    return this.userService.createUser(body);
  }
  @Put()
  async updateUser(@Body() body) {
    return this.userService.updateUser(body);
  }
  @Delete()
  async deleteUser(@Body() body) {
    return this.userService.deleteUser(body);
  }
}
