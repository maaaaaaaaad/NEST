import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { FriendsService } from './friends.service';
import FriendModel from './types/friend.model';

@Controller()
export class FriendsController {
  constructor(private readonly friendsService: FriendsService) {}

  @Post()
  createFriend(@Body() friendData) {
    return this.friendsService.addFriend(friendData);
  }

  @Get()
  loadAllFriends(): FriendModel[] {
    return this.friendsService.loadAll();
  }

  @Get('/:id')
  loadOneFriend(@Param('id') friendId: number): FriendModel {
    return this.friendsService.loadSelectedFriend(friendId);
  }

  @Delete('/:id')
  removeFriendOne(@Param('id') friendId: number) {
    return this.friendsService.deleteFriend(friendId);
  }
}
