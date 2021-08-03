export const initialState = {
    todos: ['Run']
};


export const AppReducer = (state, action) => {
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

