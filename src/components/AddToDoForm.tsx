import Button from "./Button";
import { useState} from "react";
import useTodosContext from "../lib/hooks";
export default function AddToDoForm( ){
    const [todoText, setTodoText] = useState("");
    const {handleAddTodos} = useTodosContext();
    return (
     <form onSubmit={
         (e) => {
             e.preventDefault();
            handleAddTodos(todoText)
             setTodoText('')
         }
     }>
         <h2 className='font-medium my-[9px]'>Add a todo</h2>
         <input className='h-[45px] border border-black/[12%] block w-full my-[9px] rounded-[5px] px-[16px]' value={todoText} onChange={(e)=>setTodoText(e.target.value)} type='text'/>
         <Button type='primary'>Add to list</Button>
     </form>
    )
}