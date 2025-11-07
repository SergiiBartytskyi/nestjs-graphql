import { Context, Resolver, Args, Mutation } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import type { GqlContext } from 'src/common/interfaces/gql-context.interface';
import { AuthModel } from './models/auth.model';
import { RegisterInput } from './inputs/register.input';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => AuthModel)
  async register(
    @Context() { res }: GqlContext,
    @Args('data') input: RegisterInput,
  ) {
    return this.authService.register(res, input);
  }
}
