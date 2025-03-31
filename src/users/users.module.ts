import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [UsersController],
})
export class UsersModule {
  constructor(private readonly configService: ConfigService) {
    const port = this.configService.get<number>('PORT') ?? 5000;
    const db = this.configService.get<string>('database.url');
    console.log(`Server running on port ${port}`, db);
  }
}
