import {
	ArgumentsHost,
	Catch,
	HttpException,
	InternalServerErrorException,
	Logger,
} from '@nestjs/common'
import {GqlExceptionFilter} from '@nestjs/graphql'

@Catch()
export class GraphqlExceptionFilter implements GqlExceptionFilter {
	private readonly logger: Logger = new Logger(GraphqlExceptionFilter.name)
	catch(exception: any, _host: ArgumentsHost) {
		const isHandledException = exception instanceof HttpException
		const prefix = isHandledException ? '[HANDLED]' : '[UNHANDLED]'

		this.logger.error(`${prefix}================`)
		this.logger.error(`${prefix}graphql exception`)
		this.logger.error(exception)
		if (isHandledException) {
			return exception
		}

		return new InternalServerErrorException()
	}
}
