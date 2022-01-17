/* eslint-disable no-lone-blocks */
import { useEffect, useState } from "react";
import { getUsers, addUsers,deleteUsers,actualizarUsers,db } from "./getData";
import corazon from "./images/corazon.svg"
import { collection, onSnapshot } from "firebase/firestore";
import Auth from "./auth/Auth";
import style from "./App.module.css"

const INITIAL_FORM_DATA ={
  Nombre:"",
  Correo:""
}

function App() {

  {/* ------------------ESTADOS------------------ */}
  const [usersData, setUsersData]=useState([]);
  const [dataForm,setDataForm]=useState(INITIAL_FORM_DATA);
  const [watchPerson,setWatchPerson]=useState(INITIAL_FORM_DATA);
  const [userLog, setUserLog] = useState(null);
  




  useEffect(()=>{    
  const unsub = onSnapshot(collection(db, "users"), (snapshot) => {
    const usersData = snapshot.docs.map(
      (doc) => {
        return {
          ...doc.data(),
          id: doc.id,
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
    addUsers(dataForm).then((id)=>{
      setUsersData((prev)=>{
        return[...prev,dataForm]
      })
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
  
  return (
    <div className={style.App}>
{/* ------------------Login------------------ */}
    <div className={style.auth}>
      <Auth userLog={userLog} setUserLog={setUserLog} />
    </div>     
{/* ------------------Login------------------ */}

      {usersData.map((u)=>{
        return(
          <div key={u.id}>
            <span>{u.Correo}</span>
            <span>{u.Nombre}</span>
            <button className={style.delete} id={u.id} onClick={manejarDelete}>x</button>
            <button onClick={()=>likeUser(u.id,u.likes)}>
              <img src={corazon} height ="13px" alt="Corazon"  > 
              </img>
              <span>{u.likes ? u.likes : 0}</span>
            </button>
          </div>
        );
      })}






{/* ------------------formulario------------------ */}

      <form onSubmit={manejarSubmit} >
        <div>
          <span>Nombre</span>
          <input name="Nombre" value={dataForm.Nombre} onChange={cambiarNombre}></input>
        </div>
        <div>
          <span>Email</span>
          <input onChange={cambiarNombre} name="Correo" type="email" value={dataForm.Correo} ></input>  
        </div>
        <button>Enviar</button>
      </form>
{/* ------------------formulario------------------ */}





    {/* <div key={watchPerson.id}>
          <span>{watchPerson.Correo}</span>
          <span>{watchPerson.Nombre}</span>
          <button onClick={()=>likeUser("72Dj69B3w8XzqWfZVb54",600)}>
            <img  
            src={corazon}
            height ="13px"
            alt="corazon"
            > 
            </img>
            <span>
              {watchPerson.likes}
            </span>
          </button>
      </div> */}
    </div>
  );
}

export default App;
