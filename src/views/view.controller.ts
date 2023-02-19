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
    console.log(userPlaceData);
    return { userPlaceData: userPlaceData };
  }

  @Get('write')
  @Render('write.ejs')
  async write() {
    return;
  }

  @Get('search')
  @Render('search.popup.ejs')
  async search() {
    return;
  }
}
