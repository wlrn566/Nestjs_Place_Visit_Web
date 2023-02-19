import { IsNotEmpty } from 'class-validator';

export class UserPlaceDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  content: string;

  @IsNotEmpty()
  address: string;

  @IsNotEmpty()
  latitude: number;

  @IsNotEmpty()
  longitude: number;
}
