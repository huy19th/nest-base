import { applyDecorators } from '@nestjs/common';
import {
    ApiBadRequestResponse,
    ApiUnauthorizedResponse,
    ApiInternalServerErrorResponse,
    ApiOperation,
    ApiResponse,
} from '@nestjs/swagger';

import { HttpStatus } from '@nestjs/common';

export class BadRequestResponseSchema {
    statusCode: number = HttpStatus.BAD_REQUEST;
    message: string = 'Bad Request';
    timestamp: Date;
    errors: string = 'Bad Request';
}

export class InternalServerErrorResponseSchema {
    statusCode: number = HttpStatus.INTERNAL_SERVER_ERROR;
    message: string = 'Internal Server Error';
    timestamp: Date;
    errors: string = 'Internal Server Error';
}

export class UnauthorizedResponseSchema {
    statusCode: number = HttpStatus.UNAUTHORIZED;
    message: string = 'Unauthorized';
    timestamp: Date;
    errors: string = 'Unauthorized';
}

export const ApiInfo = (options?: { summary?: string, type?: any }) => {
    let decorators: any[] = [
        ApiBadRequestResponse({ type: BadRequestResponseSchema }),
        ApiUnauthorizedResponse({ type: UnauthorizedResponseSchema }),
        ApiInternalServerErrorResponse({
            type: InternalServerErrorResponseSchema,
        }),
    ];
    if (options && options.summary) decorators.push(ApiOperation({ summary: options.summary }));
    if (options && options.type) decorators.push(ApiResponse(options.type));

    return applyDecorators(...decorators);
};