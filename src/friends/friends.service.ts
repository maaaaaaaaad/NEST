import { Injectable, NotFoundException } from '@nestjs/common';
import AddFriendDto from './DTO/add-friends.dto';
import UpdateFriendDto from './DTO/update-friends.dto';
import FriendModel from './types/friend.model';

@Injectable()
export class FriendsService {
  private friendsInformation: FriendModel[] = [];

  addFriend(friendData: AddFriendDto): number {
    return this.friendsInformation.push({
      id: this.friendsInformation.length + 1,
      ...friendData,
    });
  }

  loadAll(): FriendModel[] {
    return this.friendsInformation;
  }

  loadSelectedFriend(id: number): FriendModel {
    const friendsInfo = this.friendsInformation.find(
      (friend) => friend.id === +id,
    );
    if (!friendsInfo) throw new NotFoundException(`Not founded ID : ${id}`);

    return friendsInfo;
  }

  updateFriendData(friendId: number, updateData: UpdateFriendDto): void {
    const currentFriendData = this.loadSelectedFriend(friendId);
    this.deleteFriend(friendId);
    this.friendsInformation.push({ ...currentFriendData, ...updateData });
  }

  deleteFriend(id: number): void {
    this.loadSelectedFriend(id);
    this.friendsInformation = this.friendsInformation.filter(
      (friend) => friend.id !== +id,
    );
  }
}
