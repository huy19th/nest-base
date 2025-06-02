import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AuthStaticMiddleware } from './modules/auth/auth-static.middleware';
import { AuthService } from './modules/auth/auth.service';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(process.cwd(), 'static'),
      serveRoot: '/static', // URL prefix
    }),
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {
  	configure(consumer: MiddlewareConsumer) {
      consumer
        .apply(AuthStaticMiddleware)
        .forRoutes({path: 'static/*', method: RequestMethod.GET})
	}
}
