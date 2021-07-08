import { Injectable, NotFoundException } from '@nestjs/common';
import FriendModel from './types/friend.model';

@Injectable()
export class FriendsService {
  private friendsInformation: FriendModel[] = [];

  addFriend(friendData: FriendModel) {
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

  updateFriendData(friendId: number, updateData) {
    const currentFriendData = this.loadSelectedFriend(friendId);
    this.deleteFriend(friendId);
    this.friendsInformation.push({ ...currentFriendData, ...updateData });
  }

  deleteFriend(id: number) {
    this.loadSelectedFriend(id);
    this.friendsInformation = this.friendsInformation.filter(
      (friend) => friend.id !== +id,
    );
  }
}
