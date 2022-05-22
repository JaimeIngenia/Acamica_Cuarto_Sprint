import React, { useContext, useEffect, useState } from 'react';
import style from "./Profile.module.css"
import imgP from '../../images/imgPerfil.svg'
import back from '../../images/back.svg'
import imgLogout from '../../images/logout.svg'
import { db, logout } from '../../getData'
import { Appcontext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import Tweet from '../tweets/Tweet';
import { collection, doc, getDoc } from "firebase/firestore";

const Profile = () => {
    const { color, nombre, tweets, setTweets, userLog } = useContext(Appcontext);

    const posts = tweets.filter((tweet) => tweet.uid === userLog.uid);
    const favorites = tweets.filter((tweet) => tweet.likes.includes(userLog.uid));
    const [option, setOption] = useState(false)
    return (
        <div>

            <div className={style.head2}>
                <div className={style.head}>

                    <Link to="/feed">
                        <div className={style.titulo}>
                            <button className={style.back}><img style={{ filter: color }} src={back} alt="" /></button>
                            <h2 style={{ color: color }} className={style.lorem2}>{nombre}</h2>
                        </div>
                    </Link>
                    <Link to="/">
                        <button onClick={logout} className={style.logout}>
                            LOGOUT
                            <img src={imgLogout} alt="" />
                        </button>
                    </Link>

                </div>
                <div className={style.profile}>
                    <div style={{
                        background: color
                    }} className={style.elipse}>
                        <img className={style.imgp} src={imgP} alt="" />
                    </div>
                    <div style={{ background: color }} className={style.cuadro}><h2 className={style.username} >{nombre}</h2></div>
                    <div>
                        <button className={style.botonp}
                            onClick={() => {
                                setOption(false)
                            }}

                        > POSTS</button>
                        <button className={style.botonp2}
                            onClick={() => {
                                setOption(true)
                            }}
                        > FAVORITES</button>
                    </div>
                </div    >
            </div>
            <div className={style.line}>
                {
                    option ? (
                        <div className={style.muro}>
                            {console.log(favorites, "BYEEEE")}
                            {favorites.map((dataTweet) => {
                                return (
                                    <Tweet {...dataTweet} />
                                );
                            })}

                        </div>
                    ) :
                        (
                            <div >
                                {console.log(posts, "HOLAAA")}
                                {posts.map((dataTweet) => {
                                    return (
                                        <Tweet {...dataTweet} />
                                    );
                                })}

                            </div>
                        )
                }

            </div>
        </div>
    );
}

export default Profile;
