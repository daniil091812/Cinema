import axios from "axios";

export const LOADING_START ="LOADING"
export const LOADING_END ="LOADING_END"

export function LoadedAction() {

    return (dispatch) => {
        dispatch({type: LOADING_START});

            axios('https://api.themoviedb.org/3/movie/550?api_key=9128c4dd7d23379588394eca39a7d413')
                .then(res => {
                    dispatch({
                        type: LOADING_END,
                        payload: res.data
                    })
                })
    }
}