export type Todo = {
    id:number,
    text:string,
    isCompleted:boolean
}
export type TodoListProps = {
    todos:Todo[],
    handleDeleteTodos: (id: number) => void,
    handleToogleTodos: (id: number) => void,
}
export type SideBarProps = {
    handleAddTodos:(todoText:string) => void;
}
 export type addToDoFormProps = {
    handleAddTodos:(todoText:string)=>void
}
export type CounterProps  = {
    totalNumberOfTodos:number,
    numberOfCompletedTodos:number
}
export type ButtonProps = {
    onClick?: ()  => Promise<void>
    type?:"primary"|"secondary",
    children:React.ReactNode;

}
export type DeleteBtnProps = {
    id:number,
    handleDeleteTodos:(id:number)=>void;
}