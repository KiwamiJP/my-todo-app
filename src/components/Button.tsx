import {ButtonProps} from "../lib/type.ts";


export default function Button({onClick,type,children}:ButtonProps){

    return (
        <button
            className={`h-[45px] bg-[#473a2b]/[80%] w-full text-white rounded-[5px] cursor-pointer hover:bg-[#322618] ${type ==='secondary'?'opacity-[85%]':""}`}
            type='submit' onClick={onClick}>{children}</button>

    )
}