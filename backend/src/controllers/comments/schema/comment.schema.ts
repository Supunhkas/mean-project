import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/controllers/users/schema/user.schema';

export type CommentDocument = HydratedDocument<Comment>;

@Schema({timestamps: true})
export class Comment {
  @Prop()
  text: string;

  @Prop()
  like: number;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
  user: User;

  @Prop({type: mongoose.Schema.Types.ObjectId, ref: 'User'})
  parent: Comment | null;




}

export const CommentSchema = SchemaFactory.createForClass(Comment);