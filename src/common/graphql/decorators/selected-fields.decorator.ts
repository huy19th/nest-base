import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GraphQLResolveInfo } from 'graphql';
import * as graphqlFields from 'graphql-fields';
import { GqlExecutionContext } from '@nestjs/graphql';

const typeOrmSelectedFields = (fieldMap: Record<string, any>): Record<string, any | boolean> => {
    let select = {};
    for (let field in fieldMap) {
        if (typeof field != 'string') break;
        if (Object.keys(fieldMap[field]).length == 0) {
            select[field] = true;
        }
        else {
            select[field] = typeOrmSelectedFields(fieldMap[field]);
        }
    }
    return select;
}

export const SelectedFields = createParamDecorator(
    (data: unknown, context: ExecutionContext) => {
        const gqlCtx = GqlExecutionContext.create(context);
        const info = gqlCtx.getInfo<GraphQLResolveInfo>();
        const fields = typeOrmSelectedFields(graphqlFields(info));
        return fields;
    }
);