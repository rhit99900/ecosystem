import { Document } from 'mongoose'
import { Prop, Schema, SchemaFactory} from '@nestjs/mongoose'

export type TaskDocument = Task & Document 


@Schema()
export class Task{

}

export const TaskSchema = SchemaFactory.createForClass(Task)