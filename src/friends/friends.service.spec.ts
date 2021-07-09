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

  describe('Add my Friend', () => {
    it('Should be friends counter', () => {
      const addFriend = service.addFriend({
        name: 'Woong',
        age: '31',
        job: 'Coder',
        email: 'blabla@gmail.com',
        phoneNumber: '01012341234',
      });

      expect(addFriend).toBeDefined();
    });
  });

  describe('loadAll', () => {
    it('Should be loaded to all friends', () => {
      const loaded = service.loadAll();
      expect(loaded).toBeDefined();
      expect(loaded).toBeInstanceOf(Array);
    });
  });

  describe('loadSelectedFriend', () => {
    it('Should be user match id by 1', () => {
      service.addFriend({
        name: 'Woong',
        age: '31',
        job: 'Coder',
        email: 'blabla@gmail.com',
        phoneNumber: '01012341234',
      });

      const selectedFriend = service.loadSelectedFriend(1);
      expect(selectedFriend.id).toEqual(1);
    });

    it('Should be throw 404', () => {
      try {
        service.loadSelectedFriend(222);
      } catch (error) {
        expect(error).toBeInstanceOf(NotFoundException);
      }
    });
  });
});
