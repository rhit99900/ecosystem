import { Get, Controller, Req, Res, Post }  from '@nestjs/common';
import { Request, Response } from 'express';

@Controller()
export class UserController{
  @Get()
  getUsers(@Req() request: Request, @Res() response: Response){
    response.send('Hello World!');  
  }

  @Post()
  createUser(@Req() request: Request, @Res() response: Response){

  }

  @Get('/:id')
  getUser(@Req() request: Request, @Res() response: Response){
    
  }
}