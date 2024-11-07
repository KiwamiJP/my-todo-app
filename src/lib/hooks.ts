import {useContext} from "react";
import {TodosContext} from "../context/TodosContextProvider.tsx";

export default function useTodosContext(){
    const context = useContext(TodosContext);
    if(!context){
        throw new Error("Forgot to add provider");
    }
    return context
}