import { Field, ObjectType } from '@nestjs/graphql';
import { UserModel } from 'src/user/models/user.model';

@ObjectType()
export class AuthModel {
  @Field(() => UserModel)
  user: UserModel;

  @Field(() => String)
  accessToken: string;
}
