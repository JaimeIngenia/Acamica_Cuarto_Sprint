import React, { useContext } from 'react';
import style from "./Tweet.module.css"
import corazon from "../../images/corazon.svg";
import profileDefault from "../../images/profileDefault.svg";
import { deleteUsers, actualizarUsers } from "../../getData"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Appcontext } from '../context/AppContext';

const Tweet = ({ idTweet, uid, fecha, Photo, color, contenido, likes, username }) => {
    const { setUsersData, usersData, userLog } = useContext(Appcontext);

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

    return (
        <div className={style.orden2}>
            <div key={idTweet} className={style.muro2}>
                <div className={style.izquierda}>
                    <img src={profileDefault} height="56px" alt="profileDefault"></img>
                </div>
                <div className={style.derecha}>
                    <div className={style.titulo}>
                        <div>
                            <span className={style.username}>{username}</span>
                            <span className={style.fecha}>{fecha}</span>
                        </div>
                        <div>
                            {uid === userLog?.uid ? (
                                <button
                                    className={style.delete}
                                    onClick={manejarDelete}
                                >
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </button>
                            ) : null}
                        </div>
                    </div>
                    <div className={style.nombre}>{username}</div>
                    <button className={style.btnCora} onClick={() => likeUser(idTweet, likes)}>
                        <img src={corazon} height="13px" alt="Corazon"></img>
                        <span  >{likes ? likes : 0}</span>
                    </button>

                </div>

            </div>
            <div className={style.lineaB}></div>
        </div>
    );
}

export default Tweet;
