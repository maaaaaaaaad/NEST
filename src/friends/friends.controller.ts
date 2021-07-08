import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

import { FriendsService } from './friends.service';
import FriendModel from './types/friend.model';

@Controller()
export class FriendsController {
  constructor(private readonly friendsService: FriendsService) {}

  @Post()
  createFriend(@Body() friendData: FriendModel) {
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

  @Patch('/:id')
  patchFriendData(@Param('id') friendId: number, @Body() updataData) {
    return this.friendsService.updateFriendData(friendId, updataData);
  }

  @Delete('/:id')
  removeFriendOne(@Param('id') friendId: number) {
    return this.friendsService.deleteFriend(friendId);
  }
}