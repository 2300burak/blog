import * as types from "./types"

export const fetchPost = ()=> {
    return{
        type : types.FETCH_POSTS,
        payload :[]
    }
}