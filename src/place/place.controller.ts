import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserPlaceDto } from './user-place.dto';
import { PlaceService } from './place.service';

@Controller('place')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Post('')
  @UsePipes(ValidationPipe)
  async addPlace(@Body() data: UserPlaceDto): Promise<string> {
    console.log(data);
    return await this.placeService.addPlace(data);
  }
}
