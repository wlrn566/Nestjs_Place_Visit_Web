import { IsNotEmpty } from 'class-validator';

export class PlaceDto {
  @IsNotEmpty()
  place: string;

  @IsNotEmpty()
  date: string;

  @IsNotEmpty()
  review: string;
}
