/* eslint-disable no-lone-blocks */
import style from "./MuroFriend.module"
import React, { useContext } from 'react';
import corazon from "../../images/corazon.svg";
import profileDefault from "../../images/profileDefault.svg";
import { deleteUsers, actualizarUsers } from "../../getData"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Appcontext } from '../context/AppContext';

const Murofriend = () => {
    const { setUsersData, usersData, userLog } = useContext(Appcontext);
    {       /* ------------------EVENTOS----------------- */ }

    const manejarDelete = (e) => {
        console.log(e.target.id);
        deleteUsers(e.target.id).then((id) => {
            const newUsers = usersData.filter((user) => {
                return user.id !== id;
            });
            setUsersData(newUsers);
        });
    };

    const likeUser = (id, likes = 0) => {
        actualizarUsers(id, {
            likes: likes + 1,
        });
    };

    {    /* ------------------EVENTOS----------------- */ }
    return (
        <div className={style.muro}>
            {usersData.map((u) => {
                return (
                    <div className={style.orden2}>
                        <div key={u.id} className={style.muro2}>
                            <div className={style.izquierda}>
                                <img src={profileDefault} height="56px" alt="profileDefault"></img>
                            </div>
                            <div className={style.derecha}>
                                <div className={style.titulo}>
                                    <div>
                                        <span className={style.username}>USERNAME</span>
                                        <span className={style.fecha}>- 5 jun.</span>
                                    </div>
                                    <div>
                                        {u.uid === userLog?.uid ? (
                                            <button
                                                className={style.delete}
                                                id={u.id}
                                                onClick={manejarDelete}
                                            >
                                                <FontAwesomeIcon icon={faTrashAlt} />
                                            </button>
                                        ) : null}
                                    </div>
                                </div>
                                <div className={style.nombre}>{u.Nombre}</div>
                                <button className={style.btnCora} onClick={() => likeUser(u.id, u.likes)}>
                                    <img src={corazon} height="13px" alt="Corazon"></img>
                                    <span  >{u.likes ? u.likes : 0}</span>
                                </button>
                                <span className={style.correo}>Correo: {u.Correo}</span>

                            </div>

                        </div>
                        <div className={style.lineaB}></div>
                    </div>
                );
            })}

        </div>
    );
}

export default Murofriend;
