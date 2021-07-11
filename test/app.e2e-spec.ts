import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    // beforeAll is remember create data
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer()).get('/').expect(200).expect([]);
  });

  describe('friend CRUD', () => {
    const testDummyData = {
      name: 'Woong',
      age: '31',
      job: 'Coder',
      email: 'intel@gmail.com',
      phoneNumber: '01012341234',
    };

    it('/ (POST)', () => {
      return request(app.getHttpServer())
        .post('/')
        .send(testDummyData)
        .expect(201);
    });

    it('/:id (GET)', () => {
      return request(app.getHttpServer())
        .get('/1')
        .expect({ id: 1, ...testDummyData });
    });

    it('/:id (GET Error)', () => {
      return request(app.getHttpServer()).get('/2').expect(404);
    });

    it('/:id (UPDATE)', () => {
      return request(app.getHttpServer())
        .patch('/1')
        .send({ name: 'OH' })
        .expect(200);
    });

    it('/:id (DELETE)', () => {
      return request(app.getHttpServer()).delete('/1').expect(200).expect({});
    });
  });
});
