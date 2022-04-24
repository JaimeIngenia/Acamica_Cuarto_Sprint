import React, { useEffect } from "react";
import { addUsers, auth, loginConGoogle } from "../getData";
import styles from "./Auth.module.css";
import devs from "../images/devs.svg";
import google from "../images/buscar.png";
import Welcome from "../components/welcome/Welcome";
import { Link } from "react-router-dom";
import Welcomev2 from "../components/welcomeV2/WelcomeV2";
import { useNavigate } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "../firebase";



// import { Link } from 'react-browser-router';

const Auth = ({ userLog, setUserLog }) => {
  // const [userLog, setUserLog] = useState(null);
  const db = getFirestore(app);
  useEffect(() => {
    const unsuscribeAuth = auth.onAuthStateChanged((user) => {
      setUserLog(user);
      console.log(user);
    });
    return () => {
      unsuscribeAuth();
    };
  }, []);
  let navigate = useNavigate();

  async function validateUsers(valores) {
    const userRef = doc(db, "users", valores.uid);
    const dataFirebase = await getDoc(userRef);

    if (dataFirebase.exists()) {
      setUserLog(valores);
      navigate("/feed");

    } else {
      setUserLog(valores);
      addUsers(valores);
      navigate("/welcome");
    }

  }
  async function loginConGoogleV2() {
    try {
      await loginConGoogle().then((userData) => {
        const valores = {
          Nombre: userData.user.displayName,
          Photo: userData.user.photoURL,
          uid: userData.user.uid
        }
        validateUsers(valores);
      });
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div >
      <div className={styles.auth}>
        <img src={devs} alt="" className={styles.devs} />
        <div className={styles.bloqueTexto}>
          <div className={styles.titulo}>
            <h2 className={styles.lorem}>LOREM </h2>
            <h2 className={(styles.lorem, styles.lorem2)}>IPSUM DOLOR</h2>
          </div>

          <div className={styles.parrafo}>
            <p className={styles.fira}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </p>
          </div>

          <div className={styles.google}>
            {/* {userLog ? (
                       <Link to="/">
                          <Welcome userLog={userLog} setUserLog={setUserLog} />
                        </Link>
                  ) : ( */}
            <div className={styles.btnGoogle2}>
              <div className={styles.bordeImg}>
                <img src={google} alt="" className={styles.imgGoogle} />
              </div>
              <button className={styles.btnGoogle} onClick={loginConGoogleV2}>
                Login con Google
              </button>
            </div>
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
