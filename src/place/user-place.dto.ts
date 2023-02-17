import { IsNotEmpty } from 'class-validator';

export class UserPlaceDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  review: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  latitude: string;

  @IsNotEmpty()
  longitude: string;
}
