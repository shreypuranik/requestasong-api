import { Controller, Get, Query, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { SongService} from "./song/song.service";


@Controller()
export class AppController {
  constructor(
      private readonly appService: AppService,
      private readonly songService: SongService
  ) {}

  @Get()
  getHello(): object {
    return this.appService.getAppDetails();
  }

  @Get('/songs/search')
  getSearchResult(@Query() search: { query: string }):object {
    return this.songService.search(search.query);
    //return this.songService.getAllSongs();
  }

  @Get('/songs/all')
  getAllSongs():object {
    return this.songService.getAllSongs();
  }
}
