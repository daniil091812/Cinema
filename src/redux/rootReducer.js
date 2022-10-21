import {combineReducers} from "redux";
import filmsReducer from "../Components/FilmsComponent/filmsReducer";



export default combineReducers({

    video: filmsReducer,

},);
