export interface TodoGroup {
  id: number;
  title: string;
  hidden: boolean;
}

export interface SliceState {
  todoGroups: TodoGroup[];
}
