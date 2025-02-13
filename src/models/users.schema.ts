import { Mongoose, Types, Schema, model } from 'mongoose';
import { TUsers } from '../types/users.types';

const UsersSchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true
  },
  email: { 
    type: Schema.Types.String,
    default: null,
  },
  phone: {
    type: Schema.Types.String,
    default: null
  }
}, {
  autoIndex: true,
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  }, 
  toObject: {
    virtuals: true,
  },
  toJSON: {
    virtuals: true
  }
});

UsersSchema.index({ created_at: -1});
UsersSchema.index({ updated_at: -1});


const Users = model<TUsers>('User', UsersSchema);
export default Users;