import type { ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { AuthGuard } from '@nestjs/passport';
import type { Request } from 'express';

export type GraphQLContext = {
  req: Request;
  res: Response;
};

export class JwtGuard extends AuthGuard('jwt') {
  getRequest(context: ExecutionContext): Request {
    const ctx = GqlExecutionContext.create(context);

    const gqlContext: GraphQLContext = ctx.getContext();
    return gqlContext.req;
  }
}
