import { Controller, Get } from '@nestjs/common';

@Controller('api/todo')
export class TodoController {
  @Get()
  async findAll(): Promise<Object> {
    return {
      todos: [{ id: 1, title: 'Learn TypeScript', isCompleted: false }],
    };
  }
}
