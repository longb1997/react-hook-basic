import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
    toDos: PropTypes.array,
    onTodoClick : PropTypes.func,
};

TodoList.defaultProps = {
    toDos: [],
    onTodoClick: null,
};

function TodoList(props) {
    const  {toDos, onTodoClick} = props;

    const handleClick = (todo) => {
        if(onTodoClick){
            onTodoClick(todo);
        }
    };

    return (
        <ul className={'todo-list'}>
            {toDos.map(todo => (
                <li onClick={() => handleClick(todo)}
                    key={todo.id}
                >
                    {todo.title}
                </li>
            ))}
        </ul>
    );
}

export default TodoList;