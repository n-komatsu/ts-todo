import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';
import { CreateTodoDto } from './create-todo-dto';
import { UpdateTodoDto } from './update-todo-dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
  ){}

  async findAll(): Promise<Todo[]> {
    return this.todoRepository.find();
  }

  async findOne(id: string): Promise<Todo> {
    return this.todoRepository.findOne(id);
  }

  async create(todoDto: CreateTodoDto): Promise<void> {
    await this.todoRepository.save(todoDto);
  }

  async update(id: string, todoDto: UpdateTodoDto): Promise<Todo> {
    await this.todoRepository.update(id, todoDto)
    const todo = await this.todoRepository.findOne(id);
    return todo
  }
}
