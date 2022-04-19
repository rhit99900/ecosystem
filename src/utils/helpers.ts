import * as bcrypt from 'bcryptjs';


const salt = bcrypt.genSaltSync(10);

export class Helpers{
  public static async encrypt(password: string){
    return bcrypt.hashSync(password, salt);
  }
}