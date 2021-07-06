import { Module } from '@nestjs/common';
import { FriendsController } from 'src/friends/friends.controller';
import { FriendsService } from 'src/friends/friends.service';

@Module({
  controllers: [FriendsController],
  providers: [FriendsService],
})
export class AppModule {}
