import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import debug from 'debug'

import { Task } from './task.model'

@Injectable()
export class TaskModel {
}