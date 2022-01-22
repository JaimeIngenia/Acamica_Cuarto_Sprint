import React from 'react';
import styles from "./Welcome.module.css"
import devs from "../../images/devs.svg"
import { Link } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { Appcontext } from '../context/AppContext';

const Welcomev2 = ({ userProfile, userLog, logout }) => {
    const { color, setColor } = useContext(Appcontext);
    return (
        <div>
            <div className={styles.auth} >
                <img src={devs} alt="" className={styles.devs} />
                <div className={styles.bloqueTexto}>
                    <div className={styles.titulo}>
                        <h2 className={styles.lorem} >WELCOME </h2>
                        <h2 className={styles.lorem, styles.lorem2} >NAME</h2>
                    </div>
                    <input className={styles.input} type="text" placeholder='Type your username' />

                    <div className={styles.parrafo}>
                        <p className={styles.fira}>Select your favorite color</p>
                    </div>

                    <div className={styles.bloques}>
                        <div onClick={() => { setColor("#f50d5a") }} className={styles.bloque1}></div>
                        <div onClick={() => { setColor("#ff865c") }} className={styles.bloque2}></div>
                        <div onClick={() => { setColor("#ffea5c") }} className={styles.bloque3}></div>
                        <div onClick={() => { setColor("#00da76") }} className={styles.bloque4}></div>
                        <div onClick={() => { setColor("#0096ce") }} className={styles.bloque5}></div>
                        <div onClick={() => { setColor("#800fff") }} className={styles.bloque6}></div>
                    </div>
                    <Link to="/feed">
                        {/* <Link to="/feed"> */}
                        <button className={styles.continue}>CONTINUE</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Welcomev2;
