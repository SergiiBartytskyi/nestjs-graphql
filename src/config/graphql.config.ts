import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';
import { join } from 'path';
import { isDev } from 'src/utils/isDev.util';

// eslint-disable-next-line @typescript-eslint/require-await
export async function getGraphQLConfig(
  configService: ConfigService,
): Promise<ApolloDriverConfig> {
  return {
    driver: ApolloDriver,
    autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    sortSchema: true,
    playground: isDev(configService),
    context: ({ req, res }: { req: Request; res: Response }) => ({ req, res }),
  };
}
