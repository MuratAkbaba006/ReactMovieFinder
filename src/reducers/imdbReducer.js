

const imdbReducer = (state,action) => {
    switch(action.type){
        case "SEARCH_USERS":
            return{
                ...state,
                movies:action.payload
            }
        default:
            return state    
    }
}

export default imdbReducer
