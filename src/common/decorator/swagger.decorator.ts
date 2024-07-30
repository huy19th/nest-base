import { applyDecorators, HttpStatus } from '@nestjs/common';
import {
    ApiResponse,
    ApiProperty,
    ApiBadRequestResponse,
    ApiInternalServerErrorResponse,
    ApiResponseOptions,
} from '@nestjs/swagger';

export function Api(options: ApiResponseOptions = {}): <T>(
	target: object,
	propertyKey?: string | symbol,
	descriptor?: TypedPropertyDescriptor<T>,
) => void {
	return applyDecorators(
		ApiBadRequestResponse({type: () => BadRequestResponse}),
		ApiInternalServerErrorResponse({type: () => InternalServerErrorResponse}),
		ApiResponse({status: HttpStatus.OK, ...options}),
	)
}

class BadRequestResponse {
	@ApiProperty()
	message: string

	@ApiProperty({example: 'Bad Request'})
	error: string

	@ApiProperty({example: HttpStatus.BAD_REQUEST})
	statusCode: number
}

class InternalServerErrorResponse {
	@ApiProperty()
	message: string

	@ApiProperty({example: 'Internal Server Error'})
	error: string

	@ApiProperty({example: HttpStatus.INTERNAL_SERVER_ERROR})
	statusCode: number
}