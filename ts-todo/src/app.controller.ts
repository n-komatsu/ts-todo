import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api/progress')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post(':id')
  toggleProgressState(): Object {
    return {
      status: 200,
    }
  }
}
