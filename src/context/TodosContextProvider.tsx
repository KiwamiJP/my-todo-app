import { createContext, useEffect, useState, ReactNode } from "react";
import { Todo, TodoContextType } from "../lib/type.ts";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";

export const TodosContext = createContext<TodoContextType | null>(null);

type TodosContextProviderProps = {
  children: ReactNode;
};

export default function TodosContextProvider({
  children,
}: TodosContextProviderProps) {
  const initialTodos = (): Todo[] => {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      return JSON.parse(savedTodos) as Todo[];
    } else {
      return [];
    }
  };

  const [todos, setTodos] = useState<Todo[]>(initialTodos);
  const { isAuthenticated } = useKindeAuth();

  const totalNumberOfTodos = todos.length;
  const numberOfCompletedTodos = todos.filter(
    (todo: Todo) => todo.isCompleted
  ).length;

  const handleAddTodos = (todoText: string): void => {
    if (todos.length >= 3 && !isAuthenticated) {
      alert("Login to add more todos!");
    } else {
      setTodos((prev: Todo[]) => [
        ...prev,
        {
          id: (prev.length + 1).toString(),
          text: todoText,
          isCompleted: false,
        },
      ]);
    }
  };

  const handleToogleTodos = (id: string): void => {
    setTodos(
      todos.map((todo: Todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }
        return todo;
      })
    );
  };

  const handleDeleteTodos = (id: string): void => {
    setTodos((prev: Todo[]) =>
      prev.filter((todo: Todo) => todo.id !== id)
    );
  };

  // Add todos to localStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const value: TodoContextType = {
    todos,
    totalNumberOfTodos,
    numberOfCompletedTodos,
    handleAddTodos,
    handleDeleteTodos,
    handleToogleTodos,
  };

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
}
