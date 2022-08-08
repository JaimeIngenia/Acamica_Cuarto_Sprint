import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Appcontext } from "../context/AppContext";
import style from "./FriendProfile.module.css";
import back from "../../images/back.svg";
import imgP from "../../images/imgPerfil.svg";

const FriendProfile = () => {
  const { color } = useContext(Appcontext);
  return (
    <div>
      <div className={style.friendProfile}>
        <Link to="/feed">
          <div className={style.titulo}>
            <button className={style.back}>
              <img style={{ filter: color }} src={back} alt="" />
            </button>
            <h2 style={{ color: color }} className={style.lorem2}>
              USERNAME X
            </h2>
          </div>
        </Link>
        {/* 
                <button onClick={logout} className={style.logout}>
                    LOGOUT
                    <img src={imgLogout} alt="" />
                </button> */}
      </div>

      <div className={style.profile}>
        <div
          style={{
            background: color,
          }}
          className={style.elipse}
        >
          <img className={style.imgp} src={imgP} alt="" />
        </div>

        <div style={{ background: color }} className={style.cuadro}>
          <h2 className={style.username}>USERNAME X</h2>
        </div>
      </div>
    </div>
  );
};

export default FriendProfile;
