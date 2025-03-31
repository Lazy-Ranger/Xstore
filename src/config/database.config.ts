import { registerAs } from '@nestjs/config';

export const DATABASE_CONFIG = registerAs('database', () => ({
  USER: process.env['DATA_BASE_USER_NAME'],
  PASSWORD: process.env['DATA_BASE_PASSWORD'],
  HOST: process.env['DATA_BASE_HOST'],
  PORT: process.env['DATA_BASE_PORT'],
  get url() {
    return `${this.HOST}://${this.USER}:${this.PASSWORD}@${this.HOST}:${this.PORT}`;
  },
  isLocal() {
    return process.env['DATA_BASE_HOST']?.includes('localhost');
  },
}));
