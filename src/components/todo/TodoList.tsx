import TodoListGroup from "./TodoListGroup";
import { selectTodoGroupsList } from "../../redux/todo-groups/todo-groups.selector";
import { TodoGroup } from "../../redux/todo-groups/types";
import { useSelector } from "react-redux";

function TodoList() {
  const todoListGroups: TodoGroup[] = useSelector(selectTodoGroupsList);

  function listGroups() {
    return todoListGroups.map((todoListGroup) => (
      <TodoListGroup key={todoListGroup.id} id={todoListGroup.id} />
    ));
  }

  return (
    <div>
      <div className="font-bold text-xl">Csoportok:</div>
      <div>Add Group</div>
      <div>{listGroups()}</div>
    </div>
  );
}

export default TodoList;
