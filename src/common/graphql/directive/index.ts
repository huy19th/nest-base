import { getDirective, MapperKind, mapSchema } from '@graphql-tools/utils';
import { defaultFieldResolver, GraphQLSchema } from 'graphql';

class Directives {
  upper: string;
  proper: string;
  lower: string;
}

class Directive extends Directives {
  constructor() {
    super();
    Object.keys(this).forEach(key => this[key] = `@${key}`);
  }
}

class DirectiveName extends Directives {
  constructor() {
    super();
    Object.keys(this).forEach(key => this[key] = key);
  }
}

export const directive = new Directive();
const directiveNames = new DirectiveName();


export function registerDirectives(schema: GraphQLSchema) {
  return mapSchema(
    schema,
    {
      [MapperKind.OBJECT_FIELD]: (fieldConfig) => {
        Object.values(directiveNames).forEach(directiveName => {
          const currentDirective = getDirective(schema, fieldConfig, directiveName)?.[0];
          if (!currentDirective) return;
          const { resolve = defaultFieldResolver } = fieldConfig;
          fieldConfig.resolve = async function (source, args, context, info) {
            const result = await resolve(source, args, context, info);
            if (typeof result === 'string') {
              if (directiveName == directiveNames.lower) return result.toLowerCase();
              if (directiveName == directiveNames.upper) return result.toUpperCase();
              if (directiveName == directiveNames.proper) return result.replace(/\w\S*/g,text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase());
            }
            return result;
          };
        })
        return fieldConfig;
      }
    }
  )
}