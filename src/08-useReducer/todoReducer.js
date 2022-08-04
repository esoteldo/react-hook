
export const todoReducer=(initialState,action)=>{
    switch (action.type) {
        case 'add todo':
            return [...initialState,action.payload]
        //type:"remove todo", payload:id
        case 'remove todo':
            return initialState.filter(todo=> todo.id !== action.payload);
        
        default:
            return initialState
    }

}