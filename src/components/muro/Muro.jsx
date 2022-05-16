/* eslint-disable no-lone-blocks */
import React, { useContext, useEffect, useState } from 'react';
import style from "./Muro.module.css"
import corazon from "../../images/corazon.svg";
import profileDefault from "../../images/profileDefault.svg";
import { deleteUsers, actualizarUsers, db } from "../../getData"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Appcontext } from '../context/AppContext';
import Tweet from '../tweets/Tweet';
import { collection, doc, onSnapshot } from "firebase/firestore";


const Muro = () => {
    const { setUsersData, usersData, userLog } = useContext(Appcontext);

    const [tweets, setTweets] = useState([]);

    {       /* ------------------EVENTOS----------------- */ }
    const tweetPrueba = {
        idTweet: "1",
        uid: "asdasd",
        fecha: "15/05/2022",
        Photo: corazon,
        color: "#FFF",
        contenido: "tweeetPrueba",
        likes: [1],
        username: "usernamePrueba"
    }

    useEffect(() => {
        onSnapshot(collection(db, "/tweets"), (docs) => {
            const response = [];
            docs.forEach(
                (doc) => {
                    response.push(doc.data());

                }
            );
            setTweets(response);
        });

    }, []);

    {    /* ------------------EVENTOS----------------- */ }
    return (
        <div className={style.muro}>
            {tweets.map((dataTweet) => {
                return (
                    <Tweet {...dataTweet} />
                );
            })}

        </div>
    );
}

export default Muro;
