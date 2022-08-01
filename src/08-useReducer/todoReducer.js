
export const todoReducer=(initialState,action)=>{
    switch (action.type) {
        case 'ABC':
            throw new Error('la funcion ABC no esta implementada')
    
        default:
            return initialState
    }

}