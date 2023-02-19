import { Controller, Get, Render } from '@nestjs/common';
// import { response } from 'express';
// import fs = require('fs');
import { PlaceService } from '../place/place.service';

@Controller('view')
export class ViewContoller {
  constructor(private placeService: PlaceService) {}

  @Get('main')
  @Render('main.ejs')
  async main() {
    const userPlaceData = await this.placeService.getAllUserPlace();
    return { userPlaceData: userPlaceData };
  }

  @Get('place/new')
  @Render('write.ejs')
  async write() {
    return;
  }

  @Get('place/search')
  @Render('search.popup.ejs')
  async search() {
    return;
  }
}
