import React from "react";
import styles from "./Welcome.module.css";
import devs from "../../images/devs.svg";
import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { Appcontext } from "../context/AppContext";
import { actualizarUsers } from "../../getData";

const Welcomev2 = ({ userProfile, logout }) => {
  const { color, setColor, nombre, setNombre, userLog } =
    useContext(Appcontext);
  // const [nombre, setNombre] = useState("")
  const manejarNombre = (e) => {
    setNombre(e.target.value);
    console.log(nombre);
  };
  return (
    <div>
      <div className={styles.auth}>
        <img src={devs} alt="" className={styles.devs} />
        <div className={styles.bloqueTexto}>
          <div className={styles.titulo}>
            <h2 className={styles.lorem}>WELCOME </h2>
            <h2
              style={{ color: color }}
              className={` ${styles.lorem} ${styles.lorem2}`}
            >
              NAME!
            </h2>
          </div>
          <input
            className={styles.input}
            type="text"
            placeholder="Type your username"
            onChange={manejarNombre}
          />

          <div className={styles.parrafo}>
            <br />
            <p className={styles.fira}>Select your favorite color</p>
          </div>

          <div className={styles.bloques}>
            <div
              onClick={() => {
                setColor("#f50d5a");
              }}
              className={styles.bloque1}
            ></div>
            <div
              onClick={() => {
                setColor("#ff865c");
              }}
              className={styles.bloque2}
            ></div>
            <div
              onClick={() => {
                setColor("#ffea5c");
              }}
              className={styles.bloque3}
            ></div>
            <div
              onClick={() => {
                setColor("#00da76");
              }}
              className={styles.bloque4}
            ></div>
            <div
              onClick={() => {
                setColor("#0096ce");
              }}
              className={styles.bloque5}
            ></div>
            <div
              onClick={() => {
                setColor("#800fff");
              }}
              className={styles.bloque6}
            ></div>
          </div>
          <Link to="/feed">
            {/* <Link to="/feed"> */}
            <button
              className={styles.continue}
              onClick={() => {
                actualizarUsers(userLog.uid, {
                  color: color,
                  username: nombre,
                });
              }}
            >
              CONTINUE
            </button>
          </Link>
          <br />
          <br />
          <p className={styles.textoFinal}>
            © 2020 Devs_United - <strong> BETA</strong>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Welcomev2;
