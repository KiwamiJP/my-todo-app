const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export interface Todo {
  id: string;
  text: string;
  isCompleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export const todoApi = {
  // Get all todos
  getTodos: async (): Promise<Todo[]> => {
    const response = await fetch(`${API_BASE_URL}/todos`);
    if (!response.ok) throw new Error("Failed to fetch todos");
    return response.json();
  },

  // Create a new todo
  createTodo: async (text: string): Promise<Todo> => {
    const response = await fetch(`${API_BASE_URL}/todos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    });
    if (!response.ok) throw new Error("Failed to create todo");
    return response.json();
  },

  // Update todo
  updateTodo: async (
    id: string,
    updates: { text?: string; isCompleted?: boolean }
  ): Promise<Todo> => {
    const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updates),
    });
    if (!response.ok) throw new Error("Failed to update todo");
    return response.json();
  },

  // Delete todo
  deleteTodo: async (id: string): Promise<void> => {
    const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) throw new Error("Failed to delete todo");
  },
};
