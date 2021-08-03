import { useRef, useReducer } from 'react';



const initialState = {
    todos: ['Run']
};

const todoReducer = (state, action) => {
    if(action.type === 'ADD_TODO'){
        return {
            ...state,
            todos: [...state.todos, action.data]
        };
    }
    if(action.type === 'REMOVE_TODO'){
        return {
            ...state,
            todos: [...state.todos.slice(0, action.data), ...state.todos.slice(action.data+1, state.todos.length)]
        };
    }
    return state;
}



const Todo = () => {
    const [state, dispatch] = useReducer(todoReducer, initialState);

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


