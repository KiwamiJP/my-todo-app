import { createContext } from "react";
import type { TodoContextType } from "../lib/type.ts";

export const TodosContext = createContext<TodoContextType | null>(null);
