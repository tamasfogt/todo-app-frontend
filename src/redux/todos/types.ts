export interface SliceState {
  todos: Todo[];
}

export interface Todo {
  id: number;
  group_id: number;
  name: string;
}
