import {LOADING_END, LOADING_ERROR, LOADING_START} from "./actions";
import initialStore from "../../redux/initialStore";


export default function filmsReducer(videoFromStore = initialStore.video, {type, payload}) {
    switch (type) {
        case LOADING_START:
            return {
                ...videoFromStore
            };

        case LOADING_END:
            return {
                ...videoFromStore,
                video: payload
            };
        default:
            return videoFromStore;
    }
}