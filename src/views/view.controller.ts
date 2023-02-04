import { Controller, Get, Render } from '@nestjs/common';

@Controller('main')
export class ViewContoller {
  @Get()
  @Render('main.ejs')
  async view() {
    return { text1: '여기여기1', text2: '여기여기2' };
  }
}
