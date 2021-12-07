import React, {useState, useEffect} from 'react';
import TodoItem from './TodoItem';
import axios from 'axios';

const TodoList = () => {
    const [items, setItems] = useState([]);

    useEffect(function(){
        (async () => {
            let response = await fetch('http://localhost:3001/tasks')
            response = await response.json();
            setItems(response)
        })();
    }, []);

    const complitedTask = (id) => {
        console.log(id);
    }

    const lists = items.map(item => {
        return <TodoItem item={item} 
                        key={item.id} 
                        complitedTask={complitedTask}
                />
    });

    return(
        <div>
            <div className="todos">
                {lists}
            </div>
        </div>
    )
}

export default TodoList;