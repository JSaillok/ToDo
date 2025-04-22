import styles from "./todoitem.module.css"

export default function TodoItem({item, todos, setTodos}){
    function handleDelete() {
        console.log("Delete button clicked for item", item);
        // is similar to map()
        //takes all list of todos, and calls back all except the item
        setTodos(todos.filter((todo)=>todo !== item));
    }
    return(
        <div className={styles.item}>
            <div className={styles.itemName}>
                {item.name}
                <span>
                    <button 
                        onClick={()=>handleDelete(item)} 
                        className={styles.Button}
                    >
                        X
                    </button>
                </span>
            </div>
            <hr className={styles.line} />
        </div>
    );
}

// the callback function is to prevent insta call the handleDelete item function.