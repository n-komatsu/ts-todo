import { Todo } from './todo.entity';

export interface TodoResponce {
  status: number,
  responce: {
    todo?: Todo,
    todos?: Todo[]
  }
}