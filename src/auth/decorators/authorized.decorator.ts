import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { User } from '@prisma/client';
import { GraphQLContext } from '../guards/jwt.guard';

export const Authorized = createParamDecorator(
  (data: keyof User, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);

    const gqlContext: GraphQLContext = ctx.getContext();

    const user = gqlContext.req.user as User;
    return data ? user[data] : user;
  },
);
