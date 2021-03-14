const MovieReducer = (state,action)=>{
    switch(action.type){
        case "SEARCH_MOVİES":
        return{
            ...state,
            movies:action.payload,
            loading:false
        }
        case "SET_LOADİNG":
            return {
                ...state,
                loading:true
            }
        case "CLEAR_MOVİES":
            return {
                ...state,
                movies:[],
                loading:false
            }
        case "GET_MOVİE":
            return{
                ...state,
                movie:action.payload,
                loading:false
            }        
        default : 
            return state
    }
}

export default MovieReducer