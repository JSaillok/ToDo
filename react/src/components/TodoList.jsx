import TodoItem from "./TodoItem";
import styles from "./todolist.module.css";

export default function TodoList({todos, setTodos}) {
    return(
        <div className={styles.list}>
            {todos.map(item=> (
                <TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos}/>
            ))}
        </div>
    );
}

//we pass also todos so we know which one we have to delete
// setTodos to pass the new list without the deleted item.