import { Controller, Post, Req, Res, Get } from '@nestjs/common';

@Controller('/users')
export class UsersController {
  constructor() {}

  @Post('/')
  addUser(@Req() req: Request) {
    return {
      message: 'Hello World',
    };
  }
}
