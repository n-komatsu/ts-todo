import { Controller, Param, Post } from '@nestjs/common';

@Controller('api/progress')
export class ProgressController {
  @Post(':id')
  toggleProgressState(@Param() params): Object {
    const { id } = params.id;
    return {
      status: 200,
    }
  }
}
