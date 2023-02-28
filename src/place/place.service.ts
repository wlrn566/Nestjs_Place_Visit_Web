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

  async getAllUserPlace(): Promise<UserPlace[]> {
    // const datas = await this.userPlaceRepository.find({
    //   order: {
    //     created_at: 'DESC',
    //   },
    // });
    // return Object.assign({
    //   data: datas,
    //   statusCode: 200,
    //   statusMsg: `데이터 조회가 성공적으로 완료되었습니다.`,
    // });
    return await this.userPlaceRepository.find({
      order: {
        created_at: 'DESC',
      },
    });
  }
}
