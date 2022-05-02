/* eslint-disable no-lone-blocks */
import React, { useContext } from 'react';
import style from "./Muro.module.css"
import corazon from "../../images/corazon.svg";
import profileDefault from "../../images/profileDefault.svg";
import { deleteUsers, actualizarUsers } from "../../getData"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Appcontext } from '../context/AppContext';

const Muro = () => {
    const { setUsersData, usersData, userLog } = useContext(Appcontext);
    {       /* ------------------EVENTOS----------------- */ }



    {    /* ------------------EVENTOS----------------- */ }
    return (
        <div className={style.muro}>
            {usersData.map((u) => {
                return (
                    <div>

                    </div>
                );
            })}

        </div>
    );
}

export default Muro;
