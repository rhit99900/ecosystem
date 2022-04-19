import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type UserDocument = User & Document

@Schema()
export class User {
  @Prop({ 
    required: true,
    validate: {
      validator: (value) => {
        
      }
    } 
  })
  username: string

  @Prop({ 
    required: true 
  })
  password: string

  @Prop({ 
    required: true 
  })
  name: string 

  @Prop({
    required: true
  })
  email: string
  
  @Prop({
    required: true
  })
  created_at: Date 
  
  @Prop({
    required: true
  })
  updated_at: Date 
}

export const UserSchema = SchemaFactory.createForClass(User)