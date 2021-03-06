import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
//import { LocalAuthGuard } from '../auth/local-auth.guard';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('/signup')
  signup(@Body() body) {
    return this.userService.signup(body);
  }
  //@UseGuards(LocalAuthGuard)
  @Post('/login')
  login(@Body() body, @Req() req) {
    console.log(req.session);
    // return this.userService.login(body, req);
    return req;
  }
  @Get('/logout')
  logout() {
    return this.userService.logout();
  }
  @Put()
  updateUser(@Body() body) {
    return this.userService.updateUser(body);
  }
  @Delete()
  deleteUser(@Body() body) {
    return this.userService.deleteUser(body);
  }
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
}
