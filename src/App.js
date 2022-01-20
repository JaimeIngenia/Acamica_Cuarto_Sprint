/* eslint-disable no-lone-blocks */
import { useEffect, useState } from "react";
import { getUsers, addUsers,deleteUsers,actualizarUsers,db } from "./getData";
import corazon from "./images/corazon.svg"
import logoMas from "./images/logoMas.svg"
import { collection, onSnapshot } from "firebase/firestore";
import Auth from "./auth/Auth";
import style from "./App.module.css"
import Welcomev2 from "./components/welcomeV2/WelcomeV2";
import image2 from "./images/image2.svg"
import Profile from "./components/profile/Profile";
const INITIAL_FORM_DATA ={
  Nombre:"",
  Correo:"",
  likes:7,
  uid:""
}

function App() {
{/* ------------------HOOCKS  ------------------ */}
  const [usersData, setUsersData]=useState([]);
  const [dataForm,setDataForm]=useState(INITIAL_FORM_DATA);
  const [userLog, setUserLog] = useState(null);//datos de servicio de autenticación del usuario logueado
{/* ------------------ESTADOS------------------ */}
  useEffect(()=>{    
  const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
    const usersData = snapshot.docs.map(
      (doc) => {
        return {
          ...doc.data(),
          id: doc.id,
          // message: doc.data().message,
          likes: doc.data().likes
          
        };
      },
      (error) => {
        console.log(error, "error de escucha");
      }
    );
    setUsersData(usersData);
    }
    );
  return ()=>{
    unsub()
  } 
  },[])

{/* ------------------ESTADOS------------------ */}

{/* ------------------PRUEBA------------------ */}
useEffect(()=>{
     getUsers()
    .then((data) => {
       console.log(data);
       setUsersData(data);
     })
     .catch((error) => console.log("error"));
  },[])
{/* ------------------PRUEBA------------------ */}

{/* ------------------EVENTOS----------------- */}
const cambiarNombre=(e)=>{
    setDataForm((prev)=>{
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

const manejarSubmit =(e)=>{
  e.preventDefault();
  addUsers({
    ...dataForm,
  uid:userLog?.uid
  }).then((id)=>{
    setDataForm(INITIAL_FORM_DATA)      
  })
  .catch((error)=>{
    console.log("Error guardando usuario",error);
  })
};

const manejarDelete=(e)=>{
  console.log(e.target.id);
  deleteUsers(e.target.id).then((id)=>{
    const newUsers = usersData.filter((user)=>{
      return user.id !== id;
    })
    setUsersData(newUsers);
  }) ;
}

const likeUser = (id, likes=0)=>{
  actualizarUsers(id,{
    likes: likes +1
  })
}
{/* ------------------EVENTOS----------------- */}










return (
  <div className={style.App}>
{/* ------------------Imprimir ------------------ */}
    {/* {usersData.map((u)=>{
      return(
        <div key={u.id}>
          <span>{u.Correo}</span>
          <span>{u.Nombre}</span>
          {
            u.uid===userLog?.uid?<button className={style.delete} id={u.id} onClick={manejarDelete}>x</button>:null}
          <button onClick={()=>likeUser(u.id,u.likes)}>
            <img src={corazon} height ="13px" alt="Corazon"  > 
            </img>
            <span>{u.likes ? u.likes : 0}</span>
          </button>
        </div>
      );
    })} */}
{/* ------------------Imprimir------------------ */}
{/* ------------------formulario------------------ */}
      {/* <div className={style.head}>
        <div> <img src={image2} alt="" className={style.image2Head}></img> </div>
        <div><img src={logoMas} alt="" className={style.logoMas}></img> </div>

        <div className={style.titulo}>
                        <h2 className={style.lore} >DEVS_ </h2>
                        <h2 className={style.lorem, style.lorem2} >UNITED</h2>
        </div>
      </div>

      <form onSubmit={manejarSubmit} className={style.form}>
        <div className={style.izquierda}> 
        <img src={image2}   alt="" className={style.image2Head2}></img>
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
            <span>Email</span>
            <input onChange={cambiarNombre} name="Correo" type="email" value={dataForm.Correo} ></input>  
          </div>
          <p className={style.p}>200 max</p>
          <button className={style.btnPost}>POST</button>
        </div>   
      </form> */}
{/* ------------------formulario------------------ */}


{/* ------------------profile------------------ */}
    {/* <Profile/> */}
{/* ------------------profile------------------ */}







{/* ------------------Login------------------ */}
      <div className={style.auth}>
        <Auth userLog={userLog} setUserLog={setUserLog} />
      </div>      
{/* ------------------Login------------------ */}

      {/* <Welcomev2/> */}

    </div>
  );
}

export default App;
