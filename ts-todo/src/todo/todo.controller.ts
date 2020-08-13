import { Controller, Get } from '@nestjs/common';
import { TodoResponce } from './todoResponce.interface';

@Controller('api/todo')
export class TodoController {
  @Get()
  async findAll(): Promise<TodoResponce> {
    return {
      status: 200,
      responce: {
        todos: [{ id: 1, title: 'Learn TypeScript', completed: false }],
      }
    };
  }
}
