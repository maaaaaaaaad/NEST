import { Controller, Get, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly movieService: MoviesService) {}

  @Get('/front')
  getMovieFront() {
    return this.movieService.movieFront();
  }

  @Get('/front/:id')
  getMovieLabel(@Param('id') label: string) {
    return this.movieService.movieLabel(label);
  }
}
