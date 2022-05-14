import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TaskController } from './task.controller';
import { TaskModel } from './task.service';

import { TaskSchema } from './task.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Task',
        schema: TaskSchema
      }
    ])
  ],
  controllers: [ TaskController ],
  providers: [ TaskModel ],
})

export class TaskModule {}