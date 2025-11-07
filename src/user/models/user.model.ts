import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { User, USER_ROLE } from '@prisma/client';

registerEnumType(USER_ROLE, {
  name: 'UserRole',
});
@ObjectType()
export class UserModel implements User {
  @Field(() => ID)
  id: string;

  @Field(() => String)
  email: string;

  @Field(() => String, { nullable: true })
  name: string | null;

  @Field(() => String)
  password: string;

  @Field(() => USER_ROLE)
  role: USER_ROLE;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
