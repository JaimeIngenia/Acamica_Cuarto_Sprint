import React, { useContext } from "react";
import style from "./Tweet.module.css";
import corazon from "../../images/corazon.svg";
import profileDefault from "../../images/profileDefault.svg";
import { deleteTweets, darLike } from "../../getData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Appcontext } from "../context/AppContext";

const Tweet = ({ idTweet, uid, fecha, contenido, likes, username }) => {
  const { userLog } = useContext(Appcontext);

  const manejarDelete = () => {
    console.log("eliminando");
    deleteTweets(idTweet);
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
                <button className={style.delete} onClick={manejarDelete}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </button>
              ) : null}
            </div>
          </div>
          <div className={style.nombre}>{contenido}</div>
          <button
            className={style.btnCora}
            onClick={() => darLike(idTweet, uid, likes)}
          >
            <img src={corazon} height="13px" alt="Corazon"></img>
            <span>{likes ? likes.length : 0}</span>
          </button>
        </div>
      </div>
      <div className={style.lineaB}></div>
    </div>
  );
};

export default Tweet;
