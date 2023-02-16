import { IsNotEmpty } from 'class-validator';

export class UserPlaceDto {
  @IsNotEmpty()
  place: string;

  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  review: string;
}
