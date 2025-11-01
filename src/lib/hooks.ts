import { useContext } from "react";
import { TodosContext } from "../context/TodosContextProvider.tsx";
import { TodoContextType } from "./type.ts";

export default function useTodosContext(): TodoContextType {
  const context = useContext(TodosContext);
  if (!context) {
    throw new Error("Forgot to add provider");
  }
  return context;
}
