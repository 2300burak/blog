import * as types from "../actions/types"

const  initial_state = {
    posts : []
}

const reducer = (state=initial_state, action)=> {
    switch (action.types) {
        case types.FETCH_POSTS:
            return {
                ...state,
                posts : action.payload
            }
    
        default:
            return{
                ...state
            }
    }
}
export default reducer