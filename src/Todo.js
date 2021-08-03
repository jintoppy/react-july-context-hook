import { useRef, useContext } from 'react';
import AppContext from './context';




const Todo = () => {
    const { state, dispatch } = useContext(AppContext);
    
    const addTodoInputRef = useRef();

    const onAddBtnClick = () => {
        
        const inputVal = addTodoInputRef.current.value;
        dispatch({
            type: 'ADD_TODO',
            data: inputVal
        });
    };

    const onRemoveTodoClick = (todoIndex) => {
        dispatch({
            type: 'REMOVE_TODO',
            data: todoIndex
        });
    };

    return (
        <div>
            <ul>
                {
                    state.todos.map((todo, idx) => {
                        return (<li key={idx}>
                            {todo}
                            <button onClick={() => onRemoveTodoClick(idx)}>X</button>
                        </li>)
                    })
                }
            </ul>
            <input ref={addTodoInputRef} />
            <button onClick={onAddBtnClick}>Add Todo</button>
        </div>
    )

};

export default Todo;


