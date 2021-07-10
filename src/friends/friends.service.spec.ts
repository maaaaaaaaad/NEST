import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { FriendsService } from './friends.service';

describe('friedsService', () => {
  let service: FriendsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FriendsService],
    }).compile();

    service = module.get<FriendsService>(FriendsService);
  });

  it('Should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('update', () => {
    it('Should be checking update', () => {
      service.addFriend({
        age: '31',
        email: 'integral5137@gmail.com',
        job: 'Coder',
        name: 'Woong',
        phoneNumber: '01012341234',
      });

      const currentUser = service.loadSelectedFriend(1);

      expect(currentUser.job).toEqual('Coder');

      service.updateFriendData(1, {
        job: 'Programmer',
      });

      const updateUser = service.loadSelectedFriend(1);

      expect(updateUser.job).toEqual('Programmer');
    });

    it('Update error', () => {
      try {
        service.updateFriendData(2, {
          job: 'haha',
        });
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
    });
  });
});
