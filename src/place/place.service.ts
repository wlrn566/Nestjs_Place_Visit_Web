import { Injectable } from '@nestjs/common';
import { UserPlaceDto } from './user-place.dto';

@Injectable()
export class PlaceService {
  async addPlace(data: UserPlaceDto): Promise<string> {
    return 'success';
  }
}
