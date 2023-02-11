import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ViewContoller } from './views/view.controller';
import { UserModule } from './user/user.module';
import { PlaceModule } from './place/place.module';

@Module({
  imports: [UserModule, PlaceModule, PlaceModule],
  controllers: [AppController, ViewContoller],
  providers: [AppService],
})
export class AppModule {}
