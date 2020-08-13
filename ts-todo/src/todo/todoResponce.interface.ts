export interface TodoResponce {
  status: number,
  responce: {
    todos: [
      {
        id: number,
        title: string,
        completed: boolean,
      }
    ]
  }
}