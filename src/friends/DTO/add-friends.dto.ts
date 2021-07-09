import { IsEmail, IsString, Length } from 'class-validator';

class AddFriendDto {
  @Length(2, 8)
  @IsString()
  readonly name: string;

  @IsString()
  readonly age: string;

  @IsString()
  readonly job: string;

  @IsEmail()
  readonly email: string;

  @IsString()
  readonly phoneNumber: string;
}

export default AddFriendDto;
