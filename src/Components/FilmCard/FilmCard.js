import React from 'react';
import style from './FilmCard.module.css'


const FilmCard = (props) => {

    const {name, image, text, genre} = props;

    // const img = require(`../../assets/${image}`);
//
// let navigate = useNavigate();
//
// const handleClick = () => {
//     navigate(`/restaurant/${products}`);
// }
    return (
        <a href="#">
            <img src={image} alt=""/>
            <p className={style.cardIndex}>{name}</p>
            <p className={style.genreFilm}>{genre}</p>
            <p className={style.cardText}>{text}</p>
            <p>test</p>
        </a>
    );
};

export default FilmCard;