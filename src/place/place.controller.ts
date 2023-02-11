import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { PlaceDto } from './place.dto';
import { PlaceService } from './place.service';

@Controller('place')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Post('')
  @UsePipes(ValidationPipe)
  async addPlace(@Body() data: PlaceDto): Promise<string> {
    console.log(data);
    return await this.placeService.addPlace(data);
  }
}
