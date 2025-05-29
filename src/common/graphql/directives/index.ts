import { getDirective, MapperKind, mapSchema } from '@graphql-tools/utils';
import { defaultFieldResolver, GraphQLSchema } from 'graphql';

export const GqlDirective = {
    Lower: '@lower',
    Upper: '@upper',
    Proper: '@proper'
}

export function registerDirectives(schema: GraphQLSchema) {
    return mapSchema(
        schema,
        {
            [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
                Object.values(GqlDirective).forEach(directiveName => {
                    const currentDirective = getDirective(schema, fieldConfig, directiveName)?.[0];
                    if (!currentDirective) return;
                    const { resolve = defaultFieldResolver } = fieldConfig;
                    fieldConfig.resolve = async function (source, args, context, info) {
                        const result = await resolve(source, args, context, info);
                        if (typeof result === 'string') {
                            if (directiveName == GqlDirective.Lower) return result.toLowerCase();
                            if (directiveName == GqlDirective.Upper) return result.toUpperCase();
                            if (directiveName == GqlDirective.Proper) return result.replace(/\w\S*/g, text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase());
                        }
                        return result;
                    };
                })
                return fieldConfig;
            }
        }
    )
}