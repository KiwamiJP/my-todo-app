import {DeleteBtnProps} from "../lib/type";

export default function DeleteBtn({id,handleDeleteTodos}:DeleteBtnProps) {
    return (
        <button onClick={(event)=>{
            event.stopPropagation();
            handleDeleteTodos(id)}}> ❌</button>

    )
}