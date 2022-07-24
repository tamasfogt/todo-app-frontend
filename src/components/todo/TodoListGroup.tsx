import TodoListGroupItem from "./TodoListGroupItem";
import { TodoGroup } from "../../redux/todo-groups/types";
import { selectTodoGroup } from "../../redux/todo-groups/todo-groups.selector";
import { useDispatch, useSelector } from "react-redux";
import { selectTodosByGroupId } from "../../redux/todos/todos.selector";
import { toggleHidden } from "../../redux/todo-groups/todo-groups.slices";
import { Todo } from "../../redux/todos/types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

type TodoListGroupProp = { id: number };

function TodoListGroup({ id }: TodoListGroupProp) {
  const todoListGroup: TodoGroup = useSelector(selectTodoGroup(id));
  const groupItems: Todo[] = useSelector(selectTodosByGroupId(id));
  const dispatch = useDispatch();

  function listGroupItems() {
    return groupItems.map((item) => (
      <TodoListGroupItem key={item.id} id={item.id} />
    ));
  }

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mt-4 ">
      <div
        className="pl-6 pr-6 pt-3 pb-3 text-lg font-bold cursor-pointer"
        onClick={() => dispatch(toggleHidden(id))}
      >
        {todoListGroup.title}

        <FontAwesomeIcon
          icon={faAngleDown}
          className={`${
            todoListGroup.hidden ? "rotate-180" : ""
          } float-right pt-1`}
        />
      </div>
      <div
        className={`mt-4 mx-2 duration-300 easy overflow-y-auto ${
          todoListGroup.hidden ? "opacity-0 h-0" : "opacity-1 h-72"
        }`}
      >
        {!todoListGroup.hidden ? listGroupItems() : <></>}
      </div>
    </div>
  );
}

export default TodoListGroup;
