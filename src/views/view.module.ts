import { Module } from '@nestjs/common';
import { PlaceModule } from 'src/place/place.module';
import { ViewContoller } from './view.controller';

@Module({
  imports: [PlaceModule],
  controllers: [ViewContoller],
})
export class ViewModule {}
