import mongoose, { Model } from "mongoose";
import { TUsers } from "../types/users.types";
import Users from "../models/users.schema";
import { MONGO_CONNECTION_STRING } from "../config/index.config";

class Database {
  public Users: Model<TUsers> = Users;
  private connection_string: string;
  public db = mongoose;

  constructor(){
    if(MONGO_CONNECTION_STRING) {
      this.connection_string = MONGO_CONNECTION_STRING;
      this.init()
        .then(() => {
          console.info('Successfully connection to Database');        
        })
        .catch(e => {
          console.error('Database connection failed');
          throw new Error('Database connection failed');
        })
    } else {
      throw new Error('No datbase connection string found for MongoDB');
    }
  }

  private init = () => {
    return new Promise(async (resolve, reject) => {
      try {
        await mongoose.connect(this.connection_string);
        this.db = mongoose;
        resolve(true);
      } catch(e) {
        reject(e);
      }
    })
  }
}

const DB = new Database();
export default DB;