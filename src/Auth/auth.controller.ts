import { Controller, Req, Res, Post } from '@nestjs/common';
import { Request, Response } from 'express';

@Controller('/login')
export class AuthController {
  constructor() {}

  @Post('/')
  login(@Req() req: Request, @Res() res: Response) {
    res.json({ message: 'Hello World' });
  }
}
