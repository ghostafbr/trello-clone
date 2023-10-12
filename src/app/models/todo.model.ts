export interface TodoModel {
  id: string;
  title: string;
}

export interface ColumnModel {
  title: string,
  todos: TodoModel[]
}
