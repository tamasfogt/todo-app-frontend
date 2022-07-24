import { useDispatch, useSelector } from "react-redux";
import { selectTodoById } from "../../redux/todos/todos.selector";
import { Todo } from "../../redux/todos/types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { deleteTodo } from "../../redux/todos/todos.slice";

type TodoListGroupItemProp = { id: number };

function TodoListGroupItem({ id }: TodoListGroupItemProp) {
  const dispatch = useDispatch();
  const todo: Todo = useSelector(selectTodoById(id));

  return (
    <div>
      {todo.name}
      <FontAwesomeIcon
        icon={faTrash}
        className="cursor-pointer text-red-600"
        onClick={() => dispatch(deleteTodo(id))}
      />
    </div>
  );
}

export default TodoListGroupItem;
