import { Controller, Get, Render } from '@nestjs/common';
// import { response } from 'express';
// import fs = require('fs');

@Controller('view')
export class ViewContoller {
  @Get('main')
  @Render('main.ejs')
  async main() {
    return;
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
