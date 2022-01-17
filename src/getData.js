import { getFirestore, collection, getDocs, addDoc, doc, deleteDoc, updateDoc} from 'firebase/firestore';
import {app } from "./firebase";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut
} from "firebase/auth";

export const db = getFirestore(app);



// Get a list of cities from your database
//aqui
export async function getUsers() {
  const usersCol = collection(db, "users");
  const usersSnapshot = await getDocs(usersCol);
  const usersList = usersSnapshot.docs.map((doc) => {
    return{
      ...doc.data(),
      id:doc.id
    };
  });
  return usersList;
}

// --------------AGREGAR USUARIOS--------------
export async function addUsers (user){
  try {
    const docRef = await addDoc(collection(db, "users"), user);
    console.log("Document written with ID: ", docRef.id);
    return docRef.id;
  } catch (e) {
    console.error("Error adding document: ", e);
    throw new Error("Error en addUsers")
    // return null;
  }
}
// --------------ELIMINAR USUARIOS--------------
export async function deleteUsers(id) {
  try{
    await deleteDoc(doc(db, "users", id));
    return id;
  }catch(e){
    console.log("Enrror al borrar el item",e);
    throw new Error("Error eliminando ")
  }
  
}
// --------------ACTUALIZAR USUARIOS--------------
/**
 * Servicio para actualizar un usuario
 * @param {string} id id del usuario actualizado
 * @param {object} newDataActualizada objeto que almacena la nueva data del usuario
 */
export async function actualizarUsers(id, newDataActualizada) {
  const userRef = doc(db, "users", id);
  try {
    await updateDoc(userRef,newDataActualizada);
}catch (error) {
  console.log("Error al actualizar item.", error);
  throw new Error("Error actualizando")
}
}
// --------------SINGIN--------------

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const loginConGoogle = () => signInWithPopup(auth, provider);
export const logout = () => signOut(auth);
