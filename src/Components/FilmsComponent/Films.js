import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {LoadedAction} from "./actions";

const Films = () => {

    const dispatch = useDispatch();
    const video = useSelector((store) => store.video);

    useEffect(() => {
        dispatch(LoadedAction());
    }, [])
    console.log(video)

    return (
        <div>
            Films
        </div>
    );
};

export default Films;
