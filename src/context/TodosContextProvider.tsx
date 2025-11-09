import { useEffect, useState, ReactNode } from "react";
import { TodosContext } from "./TodosContext";
import type { Todo, TodoContextType } from "../lib/type";
import { useKindeAuth } from "@kinde-oss/kinde-auth-react";
import { todoApi } from "../services/api";

type TodosContextProviderProps = {
  children: ReactNode;
};

export default function TodosContextProvider({
  children,
}: TodosContextProviderProps) {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [loading, setLoading] = useState(true);
  const { isAuthenticated } = useKindeAuth();

  const totalNumberOfTodos = todos.length;
  const numberOfCompletedTodos = todos.filter(
    (todo: Todo) => todo.isCompleted
  ).length;

  // Fetch todos from database on mount
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const data = await todoApi.getTodos();
        setTodos(data);
      } catch (error) {
        console.error("Failed to fetch todos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchTodos();
  }, []);

  const handleAddTodos = async (todoText: string): Promise<void> => {
    if (todos.length >= 3 && !isAuthenticated) {
      alert("Login to add more todos!");
      return;
    }

    try {
      const newTodo = await todoApi.createTodo(todoText);
      setTodos((prev) => [newTodo, ...prev]);
    } catch (error) {
      console.error("Failed to add todo:", error);
      alert("Failed to add todo. Please try again.");
    }
  };

  const handleToogleTodos = async (id: string): Promise<void> => {
    const todo = todos.find((t) => t.id === id);
    if (!todo) return;

    try {
      const updatedTodo = await todoApi.updateTodo(id, {
        isCompleted: !todo.isCompleted,
      });
      setTodos((prev) =>
        prev.map((t) => (t.id === id ? updatedTodo : t))
      );
    } catch (error) {
      console.error("Failed to toggle todo:", error);
      alert("Failed to update todo. Please try again.");
    }
  };

  const handleDeleteTodos = async (id: string): Promise<void> => {
    try {
      await todoApi.deleteTodo(id);
      setTodos((prev) => prev.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error("Failed to delete todo:", error);
      alert("Failed to delete todo. Please try again.");
    }
  };

  const value: TodoContextType = {
    todos,
    totalNumberOfTodos,
    numberOfCompletedTodos,
    handleAddTodos,
    handleDeleteTodos,
    handleToogleTodos,
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-xl">Loading todos...</div>
      </div>
    );
  }

  return (
    <TodosContext.Provider value={value}>{children}</TodosContext.Provider>
  );
}
