import useTodosContext from "../lib/hooks.ts";

export default function Counter() {
    const {numberOfCompletedTodos,totalNumberOfTodos} = useTodosContext();
    return (
        <p>
            <b>{
                numberOfCompletedTodos
            }</b> / {totalNumberOfTodos} todos completed
        </p>
    )
}