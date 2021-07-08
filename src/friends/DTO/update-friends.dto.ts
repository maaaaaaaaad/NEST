import { PartialType } from '@nestjs/mapped-types';
import AddFriendDto from './add-friends.dto';

class UpdateFriendDto extends PartialType(AddFriendDto) {}

export default UpdateFriendDto;
