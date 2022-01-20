import React from 'react';
import styles from "./Welcome.module.css"
import devs from "../../images/devs.svg"
import { Link } from 'react-router-dom';

const Welcomev2 = ({userProfile,userLog,logout}) => {
    return (
        <div>
            {/* <div className={styles.separa}></div>
                <div className={userProfile}>
                <img src={userLog.photoURL} alt="" />
                <p>¡Hola {userLog.displayName}!</p>
                <button onClick={logout}>Log out</button>
            </div> */}
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
                        <div className={styles.bloque1}></div>
                        <div className={styles.bloque2}></div>
                        <div className={styles.bloque3}></div>
                        <div className={styles.bloque4}></div>
                        <div className={styles.bloque5}></div>
                        <div className={styles.bloque6}></div>
                    </div> 
                    <Link to="/profile">
                        <button className={styles.continue}>CONTINUE</button>   
                    </Link>               
                </div>            
          </div> 
        </div>
        // <div className={styles.Welcomev2}>
        //     <div className={styles.separa}></div>

            
        // </div>
    );
}

export default Welcomev2;
