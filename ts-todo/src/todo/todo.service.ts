//import { QueryService } from '@nestjs-query/core';
//import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { Todo } from './todo.entity';
import { CreateTodoDto } from './create-todo-dto';
import { UpdateTodoDto } from './update-todo-dto';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
    private connection: Connection,
  ){}

  async findAll(): Promise<Todo[]> {
    const todos = await this.connection
      .getRepository(Todo)
      .createQueryBuilder('todo')
      .leftJoinAndSelect('todo.progress', 'progress')
      .getMany()

    return todos;
  }

  async findOne(id: string): Promise<Todo> {
    const todo = await this.connection
      .getRepository(Todo)
      .createQueryBuilder('todo')
      .where("todo.id = :id", { id })
      .leftJoinAndSelect('todo.progress', 'progress')
      .getOne()
    
    return todo
  }

  async create(todoDto: CreateTodoDto): Promise<void> {
    await this.todoRepository.save(todoDto);
  }

  async update(id: string, todoDto: UpdateTodoDto): Promise<Todo> {
    await this.todoRepository.update(id, todoDto)
    const todo = await this.todoRepository.findOne(id);
    return todo
  }

  async delete(id: string): Promise<void> {
    await this.todoRepository.softDelete(id);
  }
}
