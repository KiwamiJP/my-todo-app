import {createContext, useEffect, useState} from "react";
import {Todo} from "../lib/type.ts";
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";
type TTodosContext = {
    todos: Todo[],
    totalNumberOfTodos: number,
    numberOfCompletedTodos: number,
    handleAddTodos: (TodoText: string) => void,
    handleDeleteTodos: (id: number) => void,
    handleToogleTodos: (id: number) => void
}
export const TodosContext = createContext<TTodosContext | null>(null);
type TodosContextProviderProps = {
    children:React.ReactNode;
}
export default function TodosContextProvider({children}: TodosContextProviderProps) {
const initialTodos = () =>{
    const savedTodos = localStorage.getItem("todos");
    if(savedTodos){
        return   JSON.parse(savedTodos);
    }else{
        return    [];
    }
}
    const [todos,setTodos] = useState<Todo []>(initialTodos);
    const {isAuthenticated} = useKindeAuth();

    const totalNumberOfTodos = todos.length;
    const numberOfCompletedTodos = todos.filter((todo: { isCompleted: boolean; }) =>todo.isCompleted ).length


    const handleAddTodos = (todoText:string) => {
        if(todos.length >= 3 && !isAuthenticated){
            alert("Login to add more todos!")
        }else{
            setTodos((prev:any) => [
                ...prev,
                {
                    id: prev.length+1,
                    text:todoText,
                    isCompleted: false,
                }
            ]);
        }
    }
    const handleToogleTodos = (id:number)=>{
        setTodos(todos.map((todo) => {
            if(todo.id === id){
                return {
                    ...todo,
                    isCompleted: !todo.isCompleted
                }
            }
            return todo;
        }))
    }
    const handleDeleteTodos = (id:number) => {
        setTodos((prev)=>prev.filter((todo) => todo.id !== id))
    }
    //add todos to localstorage
    useEffect(() => {
            localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    return(
        <TodosContext.Provider
            value={{
                todos,
            totalNumberOfTodos,
            handleAddTodos,
            handleToogleTodos,
            handleDeleteTodos,
            numberOfCompletedTodos,
        }}>{children}
        </TodosContext.Provider>
    )
}