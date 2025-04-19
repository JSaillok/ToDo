import { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] =useState([]);
    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo("");
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={(e)=> setTodo(e.target.value)}
                    value={todo}
                    type="text"
                />
                <button type="submit">Add</button>
            </form>
            {/* {todos} in this way it shows the stacked todo items one next to other*/}
            {todos.map(item=> (
                //<h3>{item}</h3> by this occurs error about unique key
                <TodoItem key={item} item={item}/>
            ))}
        </div>
    );
}