import {Injectable, NestMiddleware} from '@nestjs/common'
import {NextFunction, Request, Response} from 'express'
import {AuthService} from './auth.service'

@Injectable()
export class AuthStaticMiddleware implements NestMiddleware {
	constructor(private readonly authService: AuthService) {}

	async use(req: Request, res: Response, next: NextFunction) {
		try {
            console.log(AuthStaticMiddleware.name)
			await this.authService.verifyUser(req.headers?.authorization || '')
			next()
		} catch (_err) {
			res.status(401).json({message: 'Unauthorized'})
		}
	}
}
