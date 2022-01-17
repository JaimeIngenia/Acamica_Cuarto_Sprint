import React from 'react';
import styles from "./Welcome.module.css"
import {logout } from '../../getData'

const {userProfile}=styles

const Welcome = ({userLog, setUserLog}) => {
    return (
        <div className={userProfile}>
            <img src={userLog.photoURL} alt="" />
            <p>¡Hola {userLog.displayName}!</p>
            <button onClick={logout}>Log out</button>
        </div>
    );
}

export default Welcome;
