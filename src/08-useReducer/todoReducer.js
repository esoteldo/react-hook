
export const todoReducer=(initialState,action)=>{
    switch (action.type) {
        case 'add todo':
            return [...initialState,action.payload]
        //type:"remove todo", payload:id
        case 'remove todo':
            return initialState.filter(todo=> todo.id !== action.payload);
        //check list todo
        case 'toggle todo':
            return initialState.map(todo=>{
                if(todo.id===action.payload){//id del todo
                    return{
                        ...todo,
                        done:!todo.done
                    }
                }
                return todo;
            } )
        
        default:
            return initialState
    }

}