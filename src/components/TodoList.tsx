import DeleteBtn from "./DeleteBtn";
import useTodosContext from "../lib/hooks";
import { Todo } from "../lib/type";

export default function TodoList() {
  const { todos, handleDeleteTodos, handleToogleTodos } = useTodosContext();

  return (
    <ul>
      {todos.length === 0 && (
        <h2 className="flex items-center justify-center h-full font-bold text-xl">
          Start by adding a todo.
        </h2>
      )}
      {todos.map((todo: Todo) => (
        <li
          key={todo.id}
          className={`flex justify-between items-center text-[14px] px-[23px] cursor-pointer border-b border-black/[8%] h-[45px]`}
          onClick={() => handleToogleTodos(todo.id)}
        >
          <span className={`${todo.isCompleted ? " line-through" : ""}`}>
            {todo.text}
          </span>
          <DeleteBtn id={todo.id} handleDeleteTodos={handleDeleteTodos} />
        </li>
      ))}
    </ul>
  );
}
