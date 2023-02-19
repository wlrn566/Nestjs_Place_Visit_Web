import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserPlaceDto } from './user-place.dto';
import { UserPlace } from '../entities/user-place.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlaceService {
  constructor(
    @InjectRepository(UserPlace)
    private readonly userPlaceRepository: Repository<UserPlace>,
  ) {}

  async createUserPlace(createUserPlaceDto: UserPlaceDto) {
    return this.userPlaceRepository.save(createUserPlaceDto);
  }

  getAllUserPlace(): Promise<UserPlace[]> {
    return this.userPlaceRepository.find({
      order: {
        created_at: 'DESC',
      },
    });
  }
}
