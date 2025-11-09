export type Todo = {
  id: string;
  text: string;
  isCompleted: boolean;
  createdAt?: string;
  updatedAt?: string;
};

export type TodoListProps = {
  todos: Todo[];
  handleDeleteTodos: (id: string) => void;
  handleToogleTodos: (id: string) => void;
};

export type SideBarProps = {
  handleAddTodos: (todoText: string) => void;
};

export type AddToDoFormProps = {
  handleAddTodos: (todoText: string) => void;
};

export type CounterProps = {
  totalNumberOfTodos: number;
  numberOfCompletedTodos: number;
};

export type ButtonProps = {
  onClick?: () => void | Promise<void>;
  type?: "primary" | "secondary";
  children: React.ReactNode;
};

export type DeleteBtnProps = {
  id: string;
  handleDeleteTodos: (id: string) => void;
};

export type TodoContextType = {
  todos: Todo[];
  numberOfCompletedTodos: number;
  totalNumberOfTodos: number;
  handleAddTodos: (text: string) => Promise<void>;
  handleDeleteTodos: (id: string) => Promise<void>;
  handleToogleTodos: (id: string) => Promise<void>;
};
