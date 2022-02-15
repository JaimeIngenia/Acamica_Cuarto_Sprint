/* eslint-disable no-lone-blocks */
import style from "./Feed.module.css"
import React, { useState, useContext } from 'react';
import logoMas from "../../images/logoMas.svg";
import image2 from "../../images/image2.svg";

import { addUsers } from "../../getData";
import Muro from "../muro/Muro";
import { Appcontext } from "../context/AppContext";
import { Link } from "react-router-dom";

const INITIAL_FORM_DATA = {
    Nombre: "",
    Correo: "",
    likes: 7,
    uid: "",
};
const Feed = () => {
    // const Feed = ({ userLog, setUserLog, usersData, setUsersData }) => {

    const { color, userLog } = useContext(Appcontext)
    {
        /* ------------------HOOCKS  ------------------ */
    }
    const [dataForm, setDataForm] = useState(INITIAL_FORM_DATA);

    {
        /* ------------------HOOCKS  ------------------ */
    }

    {/* ------------------EVENTOS----------------- */ }
    const cambiarNombre = (e) => {

        setDataForm((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };

    const manejarSubmit = (e) => {
        e.preventDefault();
        addUsers({
            ...dataForm,
            uid: userLog?.uid,
        })
            .then((id) => {
                setDataForm(INITIAL_FORM_DATA);
            })
            .catch((error) => {
                console.log("Error guardando usuario", error);
            });
    };
    {/* ------------------EVENTOS----------------- */ }

    return (
        <div className={style.feed}>

            <div className={style.head}>
                <Link to="/profile" >

                    <div style={{ borderColor: color }} className={style.elipse}>
                        <img src={userLog.Photo} alt="" className={style.image2Head}></img>
                        {console.log(userLog)}
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

            <form className={style.form}>
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
                            value={dataForm.Nombre}
                            onChange={cambiarNombre}
                            type="text"
                            placeholder="What’s happening?..."
                            className={style.textTarea}
                        />
                    </div>
                    <div>
                        <span className={style.spanCorreo}>Email</span>
                        <input
                            onChange={cambiarNombre}
                            name="Correo"
                            type="email"
                            value={dataForm.Correo}
                        ></input>
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
}

export default Feed;
