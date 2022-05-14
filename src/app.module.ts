import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { MongooseModule } from '@nestjs/mongoose';

// Imported Models for User, Task 
import { UserModule } from './users/user.module';
import { TaskModule } from './tasks/task.module';

import Configuration from './config';

@Module({
  imports: [
    MongooseModule.forRoot(Configuration().DATABASE.URI),
    UserModule,
    TaskModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
