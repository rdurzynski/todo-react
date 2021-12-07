import React from 'react';
import { FaCheckCircle, FaRecycle } from 'react-icons/fa';

const TodoItem = ({item, complitedTask}) => {
    return(
        <div className={`todos__item ${item.complited ? "todos__item--complited" : ''}`}>
            {item.title} 
            <div>
                <a href="#" className="btn" onClick={() => complitedTask(item.id)}>
                    Wykonane <FaCheckCircle className="icon"/>
                </a>
                <a href="#" className="btn">Usuń <FaRecycle className="icon"/></a>
            </div>
        </div>
    )
}

export default TodoItem;