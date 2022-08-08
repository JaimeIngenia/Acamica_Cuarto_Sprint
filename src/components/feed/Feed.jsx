/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
import style from "./Feed.module.css";
import React, { useState, useContext, useEffect } from "react";
import logoMas from "../../images/logoMas.svg";
import image2 from "../../images/image2.svg";
import Muro from "../muro/Muro";
import { Appcontext } from "../context/AppContext";
import { Link } from "react-router-dom";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../getData";

const Feed = () => {
  {
    /* ------------------HOOCKS  ------------------ */
  }
  const { color, userLog, nombre } = useContext(Appcontext);
  const [contenido, setContenido] = useState("");
  const [fecha] = useState("24-abril");

  const [tweetObjeto, setTweetObjeto] = useState({
    Photo: userLog.Photo,
    color: color,
    uid: userLog.uid,
    username: nombre,

    contenido: "",
    fecha: fecha,
    likes: [],
  });

  useEffect(() => {
    async function traerColorNombre() {
      const refColorNombre = doc(db, "users", userLog.uid);
      const datosColorNombre = await getDoc(refColorNombre);
      setTweetObjeto({
        ...tweetObjeto,
        username: datosColorNombre.data().username,
        color: datosColorNombre.data().color,
      });
    }
    traerColorNombre();
  }, []);

  {
    /* ------------------EVENTOS----------------- */
  }
  const cambiarContenidoTweet = (e) => {
    setContenido(e.target.value);
    console.log(e.target.value);
  };

  const manejarSubmit = async (e) => {
    const reference = doc(collection(db, "tweets"));
    e.preventDefault();
    await setDoc(reference, {
      ...tweetObjeto,
      contenido,
      idTweet: reference.id,
    });
    console.log(tweetObjeto);
  };
  {
    /* ------------------EVENTOS----------------- */
  }

  return (
    <div className={style.feed}>
      <div className={style.head}>
        <Link to="/profile">
          <div style={{ borderColor: color }} className={style.elipse}>
            <img src={userLog.Photo} alt="" className={style.image2Head}></img>
          </div>
        </Link>
        <div>
          <img src={logoMas} alt="" className={style.logoMas}></img>
        </div>

        <div className={style.titulo}>
          <h2 className={style.lore}>DEVS_ </h2>
          <h2 className={(style.lorem, style.lorem2)}>UNITED</h2>
        </div>
      </div>

      <form onSubmit={manejarSubmit} className={style.form}>
        <div className={style.izquierda}>
          <img src={image2} alt="" className={style.image2Head2}></img>
        </div>
        <div className={style.derecha}>
          <br />
          <div>
            <textarea
              rows="4"
              cols="30"
              name="Nombre"
              value={contenido}
              onChange={cambiarContenidoTweet}
              type="text"
              placeholder="What’s happening?..."
              className={style.textTarea}
            />
          </div>
          <p className={style.p}>200 max</p>
          <button className={style.btnPost}>POST</button>
        </div>
      </form>
      {/* ------------------Imprimir ------------------ */}
      <Muro />
      {/* ------------------Imprimir------------------ */}
    </div>
  );
};

export default Feed;
