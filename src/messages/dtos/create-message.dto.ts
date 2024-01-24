import { IsString } from 'class-validator';
export class CreateMessageDto {
  // checks if the content property is actually string
  // validation rules

  @IsString()
  content: string;
}
