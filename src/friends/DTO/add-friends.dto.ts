import { IsString } from 'class-validator';

class AddFriendDto {
  @IsString()
  readonly name: string;
  @IsString()
  readonly age: string;
  @IsString()
  readonly job?: string;
  @IsString()
  readonly email: string;
  @IsString()
  readonly phoneNumber: string;
}

export default AddFriendDto;
