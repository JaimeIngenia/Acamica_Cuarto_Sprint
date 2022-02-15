import React, { useContext } from 'react';
import style from "./Profile.module.css"
import imgP from '../../images/imgPerfil.svg'
import back from '../../images/back.svg'
import imgLogout from '../../images/logout.svg'
import { logout } from '../../getData'
import { Appcontext } from '../context/AppContext';
import { Link } from 'react-router-dom';
const Profile = () => {
    const { color, setColor, nombre } = useContext(Appcontext);
    return (
        <div>

            <div className={style.head2}>
                <div className={style.head}>

                    <Link to="/feed">
                        <div className={style.titulo}>
                            <button className={style.back}><img src={back} alt="" /></button>
                            <h2 className={style.lorem2}>{nombre}</h2>
                        </div>
                    </Link>

                    <button onClick={logout} className={style.logout}>
                        LOGOUT
                        <img src={imgLogout} alt="" />
                    </button>
                </div>
                <div className={style.profile}>

                    <div style={{
                        background: color
                    }} className={style.elipse}>
                        <img className={style.imgp} src={imgP} alt="" />
                    </div>


                    <div className={style.cuadro}><h2 className={style.username} >USERNAME</h2></div>



                    <div>
                        <button className={style.botonp}> POSTS</button>
                        <button className={style.botonp2}> FAVORITES</button>
                    </div>
                </div>
            </div>
            <div className={style.line}></div>
        </div>
    );
}

export default Profile;
