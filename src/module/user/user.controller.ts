import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Redirect,
  Res,
} from '@nestjs/common';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get()
  getUsers(@Res({ passthrough: true }) res) {
    // res.status(252).send('hello !');
    res.status(252);
    return this.userService.getUsers();
  }
  @Get(':name')
  getUser(@Param() param) {
    return this.userService.getUser(param);
  }
  @Post()
  createUser(@Body() body) {
    return this.userService.createUser(body);
  }
  @Put()
  updateUser(@Body() body) {
    return this.userService.updateUser(body);
  }
  @Delete()
  deleteUser(@Body() body) {
    return this.userService.deleteUser(body);
  }
}
