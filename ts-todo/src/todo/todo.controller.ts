import { Controller, Get } from '@nestjs/common';
import { TodoResponce } from './todoResponce.interface';
import { TodoService } from './todo.service';

@Controller('api/todo')
export class TodoController {
  constructor(
    private todoService: TodoService,
  ) {}
  @Get()
  async findAll(): Promise<TodoResponce> {
    const todos = await this.todoService.findAll();
    return {
      status: 200,
      responce: {
        todos,
      }
    };
  }
}
