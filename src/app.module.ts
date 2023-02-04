import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViewContoller } from './views/view.controller';

@Module({
  imports: [],
  controllers: [AppController, ViewContoller],
  providers: [AppService],
})
export class AppModule {}
