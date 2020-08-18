import { Todo } from './todo.entity';

export interface TodoResponce {
  status: number,
  responce: {
    message?: string,
    todo?: Todo,
    todos?: Todo[]
  }
}