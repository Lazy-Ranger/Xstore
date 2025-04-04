import { registerAs } from '@nestjs/config';

export const JWT_CONFIG = registerAs('JWT', () => {
  return {
    SECRET: process.env['JWT_SECRET'],
    EXPIRES_IN: process.env['JWT_EXPIRES_IN'],
  };
});
