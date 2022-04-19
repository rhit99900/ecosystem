import { Get, Controller, Req, Res, Post }  from '@nestjs/common';
import { Request, Response } from 'express';

import { UserModel } from './user.service';

import { Helpers } from '../utils/helpers'
@Controller('users')
export class UserController{

  constructor(private readonly userService: UserModel){}

  @Get()
  getUsers(@Req() request: Request, @Res() response: Response){
    response.send('Hello World!');  
  }

  @Post()
  async createUser(@Req() request: Request, @Res() response: Response){
    try{
      const user = await this.userService.create({
        ...request.body,
        password: request.body.password ? await Helpers.encrypt(request.body.password): undefined,
        created_at: new Date(),
        updated_at: new Date()
      })
      response.status(200).send({
        success: true, 
        data: user
      })
    }
    catch(e){
      response.status(500).send({
        success: false,
        message: e.message
      })
    }
  }

  @Get('/:id')
  getUser(@Req() request: Request, @Res() response: Response){

  }
  
}