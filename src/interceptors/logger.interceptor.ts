import {
	CallHandler,
	ExecutionContext,
	Injectable,
	Logger,
	NestInterceptor,
} from '@nestjs/common'
import {GqlExecutionContext} from '@nestjs/graphql'
import {Observable, tap} from 'rxjs'

@Injectable()
export class LoggerInterceptor implements NestInterceptor {
	private readonly logger: Logger = new Logger(LoggerInterceptor.name)
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		const gqlContext = GqlExecutionContext.create(context)

		this.logger.log('==================')
		this.logger.log('start graphql request')
		this.logger.log('==================')
		this.logger.log(
			`context path: ${JSON.stringify(gqlContext.getInfo().fieldName)}`,
		)
		this.logger.log(`context args: ${JSON.stringify(gqlContext.getArgs())}`)
		this.logger.log('==================')

		const start = Date.now()

		return next.handle().pipe(
			tap(() => {
				const timeTaken = Date.now() - start
				this.logger.log('==================')
				this.logger.log(`GraphQL request took ${timeTaken}ms`)
				this.logger.log('==================')
			}),
		)
	}
}
