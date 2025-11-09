import { Field, ID, ObjectType, registerEnumType } from '@nestjs/graphql';
import { User, UserRole } from '@prisma/client';

registerEnumType(UserRole, {
  name: 'UserRole',
});
@ObjectType({
  description: 'User model representing a user in the system',
  // This model is abstract and should not be instantiated directly
  // isAbstract: true,
})
export class UserModel implements User {
  @Field(() => ID)
  id: string;

  @Field(() => String, { description: 'The email address of the user' })
  email: string;

  @Field(() => String, {
    nullable: true,
    defaultValue: 'John Doe',
    description: 'The name of the user',
  })
  name: string | null;

  @Field(() => String, { description: 'The hashed password of the user' })
  password: string;

  @Field(() => UserRole, { description: 'The role of the user in the system' })
  role: UserRole;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
