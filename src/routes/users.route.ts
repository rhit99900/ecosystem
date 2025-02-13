import { Router } from "express";

class UserRoutes {
  path: string = 'users';
  public router = Router();
  
  constructor(){ 
    this.initialise();
  }

  private initialise = () => {

  }

}

export default UserRoutes;