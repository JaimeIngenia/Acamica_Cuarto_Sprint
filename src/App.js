/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-lone-blocks */
import { useEffect, useContext } from "react";
import { getUsers, db } from "./getData";
import { collection, onSnapshot } from "firebase/firestore";
import Auth from "./auth/Auth";
import style from "./App.module.css";
import { Appcontext } from "./components/context/AppContext";

function App() {
  {
    /* ------------------HOOCKS  ------------------ */
  }
  // const [usersData, setUsersData] = useState([]);
  // const [userLog, setUserLog] = useState(null); //datos de servicio de autenticación del usuario logueado
  const { userLog, setUsersData, setUserLog } = useContext(Appcontext);
  {
    /* ------------------ESTADOS------------------ */
  }
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
      const usersData = snapshot.docs.map(
        (doc) => {
          return {
            ...doc.data(),
            id: doc.id,
            likes: doc.data().likes,
          };
        },
        (error) => {
          console.log(error, "error de escucha");
        }
      );
      setUsersData(usersData);
    });
    return () => {
      unsub();
    };
  }, []);

  {
    /* ------------------PRUEBA------------------ */
  }
  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsersData(data);
      })
      .catch((error) => console.log("error"));
  }, []);

  return (
    <div className={style.App}>
      {/* ------------------Login------------------ */}
      <Auth userLog={userLog} setUserLog={setUserLog} />

      {/* ------------------Login------------------ */}

      {/* ------------------formulario------------------ */}
      {/* <Appcontext.Provider
        value={{ userLog, setUserLog, usersData, setUsersData }}
      >
        <Feed />
      </Appcontext.Provider> */}
      {/* ------------------formulario------------------ */}
    </div>
  );
}

export default App;
