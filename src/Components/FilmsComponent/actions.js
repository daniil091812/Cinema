import axios from "axios";

export const LOADING_START ="LOADING"
export const LOADING_END ="LOADING_END"

export function LoadedAction() {

    return (dispatch) => {
        dispatch({type: LOADING_START});



            axios('https://jsonplaceholder.typicode.com/posts')
                .then(res => {
                    dispatch({
                        type: LOADING_END,
                        payload: res.data
                    })
                })
    }
}