import { createContext } from "react";
import type { TodoContextType } from "../lib/type";

export const TodosContext = createContext<TodoContextType | null>(null);
