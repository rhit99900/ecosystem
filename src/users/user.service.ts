import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import debug from 'debug'

import { User } from './user.model'

@Injectable()
export class UserModel {
  constructor(@InjectModel('User') private readonly UserModel: Model<User>) {}

  async create(data){
    const user = new this.UserModel(data)
    try{
      await user.save()
      return user as User
    }
    catch(e){
      debug('app:user:create')(e)
    }
  }

  async get(){
    try{
      const users = await this.UserModel.find().exec()
      return users as User[]
    }
    catch(e){

    }
  }

  async getOne(){
    try{
      const user = await this.UserModel.findOne().exec()
      return user as User
    }
    catch(e){

    }
  }

  async delete(){
    try{
      const user = await this.UserModel.findOneAndDelete().exec()
      return user as User
    }
    catch(e){

    }
  }

  async update(id: string, data: object){
    try{
      const user = await this.UserModel.findOneAndUpdate().exec()
      return user as User
    }
    catch(e){

    }
  }

}