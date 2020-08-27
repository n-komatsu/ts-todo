import { Controller, Param, Post } from '@nestjs/common';
import { ProgressService } from './progress.service';

@Controller('api/progress')
export class ProgressController {
  constructor(
    private progressService: ProgressService
  ){}
  @Post(':todoId')
  async toggleProgressState(@Param() params): Promise<Object> {
    const { todoId } = params;
    const progress = await this.progressService.update(todoId);
    return {
      status: 200,
    }
  }
}
