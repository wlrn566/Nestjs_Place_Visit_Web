import { Injectable } from '@nestjs/common';
import { PlaceDto } from './place.dto';

@Injectable()
export class PlaceService {
  async addPlace(data: PlaceDto): Promise<string> {
    return 'success';
  }
}
