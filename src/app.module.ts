import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './users/user.module';

import Configuration from './config';

@Module({
  imports: [
    MongooseModule.forRoot(Configuration().DATABASE.URI),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
