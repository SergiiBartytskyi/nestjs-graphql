import { GqlModuleOptions } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';

// eslint-disable-next-line @typescript-eslint/require-await
export async function getGraphQLConfig(): Promise<GqlModuleOptions> {
  return {
    driver: ApolloDriver,
    autoSchemaFile: true,
    sortSchema: true,
  };
}
