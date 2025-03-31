import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { AuthModule } from './Auth/auth.module';
import { APP_CONFIG } from './config/app.config';
import { DATABASE_CONFIG } from './config/database.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
      cache: true,
      load: [APP_CONFIG, DATABASE_CONFIG],
      isGlobal: true,
      expandVariables: true,
    }),
    MongooseModule.forRoot(
      'mongodb+srv://nitishk642:bVoeHcOegTEJRcW2@cluster0.wpi1gwd.mongodb.net/x-store?retryWrites=true&w=majority&appName=Cluster0',
    ),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
