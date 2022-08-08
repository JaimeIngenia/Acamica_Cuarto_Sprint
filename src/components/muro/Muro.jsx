/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
import React, { useContext, useEffect } from "react";
import style from "./Muro.module.css";
import { db } from "../../getData";
import { Appcontext } from "../context/AppContext";
import Tweet from "../tweets/Tweet";
import { collection, onSnapshot } from "firebase/firestore";

const Muro = () => {
  const { tweets, setTweets } = useContext(Appcontext);

  {
    /* ------------------EVENTOS----------------- */
  }

  useEffect(() => {
    onSnapshot(collection(db, "/tweets"), (docs) => {
      const response = [];
      docs.forEach((doc) => {
        response.push(doc.data());
      });
      setTweets(response);
    });
  }, []);

  {
    /* ------------------EVENTOS----------------- */
  }
  return (
    <div className={style.muro}>
      {tweets.map((dataTweet) => {
        return <Tweet {...dataTweet} />;
      })}
    </div>
  );
};

export default Muro;
