import { GqlOptionsFactory } from '@nestjs/graphql';
import { ApolloDriverConfig } from '@nestjs/apollo';
import { registerDirectives } from '../common/graphql/directive';

export class GraphQLConfigService implements GqlOptionsFactory<ApolloDriverConfig> {
    createGqlOptions(): Omit<ApolloDriverConfig, 'driver'> {
        return {
            autoSchemaFile: 'schema.gql',
            subscriptions: {
                'graphql-ws': {
                    onConnect: (context: any) => {
                        const { connectionParams, extra } = context;
                        // user validation will remain the same as in the example above
                        // when using with graphql-ws, additional context value should be stored in the extra field
                        extra.user = { user: {} };
                    }
                },
            },
            transformSchema: (schema) => registerDirectives(schema)
        }
    }
}