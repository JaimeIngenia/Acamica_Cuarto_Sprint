import React from 'react';
import style from "./Profile.module.css"
import imgP from '../../images/imgPerfil.svg'
const Profile = () => {
    return (
        <div>
            <div className={style.line}></div>
            <div className={style.head2}>
                <div className={style.head}>
                {/* <div> <img src={image2} alt="" className={style.image2Head}></img> </div>
                <div><img src={logoMas} alt="" className={style.logoMas}></img> </div> */}

                    <div className={style.titulo}>
                        <h2 className={style.lorem2}>USERNAME</h2>
                    </div>
                    <button className={style.logout}>LOGOUT</button>
                </div>
                <div className={style.profile}>
                    
                    <div className={style.elipse}>
                    <img  className={style.imgp} src={imgP} alt="" />    
                    </div>
                    <div className={style.cuadro}><h2 className={style.username} >USERNAME</h2></div>
                    
                    <div>
                        <button className={style.botonp}> POSTS</button>
                        <button className={style.botonp2}> FAVORITES</button>
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Profile;
