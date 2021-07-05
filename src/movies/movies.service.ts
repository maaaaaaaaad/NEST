import { Injectable } from '@nestjs/common';

@Injectable()
export class MoviesService {
  movieFront() {
    return 'Hello, Here is Front!';
  }

  movieLabel(label: string) {
    return `This movie is ${label}`;
  }
}
