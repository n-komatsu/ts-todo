import { Controller, Get, Param, Body, Post, Put } from '@nestjs/common';
import { TodoResponce } from './todoResponce.interface';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './create-todo-dto';
import { UpdateTodoDto } from './update-todo-dto';

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

  @Get(':id')
  async findOne(@Param() params): Promise<TodoResponce> {
    const { id } = params;
    const todo = await this.todoService.findOne(id);

    return {
      status: 200,
      responce: {
        todo
      }
    }
  }

  @Post()
  async create(@Body() todoDto: CreateTodoDto): Promise<TodoResponce> {
    await this.todoService.create(todoDto);
    return {
      status: 200,
      responce: {
        message: '作成に成功しました',
      }
    }
  }

  @Put(':id')
  async update(@Param() params, @Body() updateTodoDto: UpdateTodoDto): Promise<TodoResponce>{
    const { id } = params;
    const todo = await this.todoService.update(id, updateTodoDto)

    return {
      status: 200,
      responce: {
        message: '更新に成功しました',
        todo
      }
    }
  }
}
