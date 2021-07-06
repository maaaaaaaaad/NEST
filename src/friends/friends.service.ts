import { Injectable } from '@nestjs/common';
import FriendModel from './types/friend.model';

@Injectable()
export class FriendsService {
  private friendsInformation: FriendModel[] = [];

  addFriend(friendData) {
    return this.friendsInformation.push({
      id: this.friendsInformation.length + 1,
      ...friendData,
    });
  }

  loadAll(): FriendModel[] {
    return this.friendsInformation;
  }

  loadSelectedFriend(id: number): FriendModel {
    return this.friendsInformation.find((friend) => friend.id === +id);
  }

  deleteFriend(id: number) {
    return this.friendsInformation.filter((friend) => friend.id !== +id);
  }
}
