import { useState } from "react";
import styles from "./form.module.css"

export default function Form({todos, setTodos}) {
    const [todo, setTodo] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo("");
    }
    return (
        <form className={styles.todoform} onSubmit={handleSubmit}>
            {/* the add button be on the right of input */}
            <div className={styles.inputContainer}> 
                <input className={styles.Input}
                    onChange={(e)=> setTodo(e.target.value)}
                    value={todo}
                    type="text"
                    placeholder="Enter todo item..."
                />
                <button className={styles.Button} type="submit">
                    Add
                </button>
            </div>
        </form>
    );
}