import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { UserPlace } from 'src/entities/user-place.entity';
import { PlaceService } from './place.service';
import { UserPlaceDto } from './user-place.dto';

@Controller('place')
export class PlaceController {
  constructor(private readonly placeService: PlaceService) {}

  @Post()
  @UsePipes(ValidationPipe)
  async createUserPlace(@Body() createUserPlaceDto: UserPlaceDto) {
    console.log(createUserPlaceDto);
    return await this.placeService.createUserPlace(createUserPlaceDto);
  }

  @Get()
  getAllUserPlace(): Promise<UserPlace[]> {
    return this.placeService.getAllUserPlace();
  }
}
