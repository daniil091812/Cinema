import React from 'react';
import style from './Header.module.css'
import * as root from "react-dom";
import {Link} from "react-router-dom";


const Header = () => {
    let nav = [
        {name: "Фільми",
         path: "/films"},
        {name: "Серіали",
         path: "/serials"},
        {name: "Мультфільми",
         path: "/multfilms"}
    ]
    return (

        <div className={style.header_container}>

            <p className={style.header_name}>Cinema</p>
                <div>
                    {nav.map((el, index )=> (
                                <Link className={style.link} to={el.path} key={index}>{el.name}</Link>
                        ))}
                </div>
        </div>
    );
};

export default Header;
