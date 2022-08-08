import {
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore";

import { app } from "./firebase";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";

export const db = getFirestore(app);

// Get a list of cities from your database
//aqui
export async function getUsers() {
  const usersCol = collection(db, "users");
  const usersSnapshot = await getDocs(usersCol);
  const usersList = usersSnapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return usersList;
}

// --------------TAREA MIGUE --------------

// const docRef = doc(db, "users", "uid");
// const docSnap = await getDoc(docRef);
// if (docSnap.exists()) {
//   console.log("Document data:", docSnap.data());
// } else {
//   // doc.data() will be undefined in this case
//   console.log("No such document!");
// }

// Validar si el usuario ya existe

// --------------AGREGAR USUARIOS--------------
export function addUsers(user) {
  try {
    setDoc(doc(db, "users", user.uid), user);
  } catch (e) {
    console.error("Error adding document: ", e);
    throw new Error("Error en addUsers");
    // return null;
  }
}
// --------------ELIMINAR USUARIOS--------------
export async function deleteTweets(id) {
  try {
    await deleteDoc(doc(db, "tweets", id));
    return id;
  } catch (e) {
    console.log("Enrror al borrar el item", e);
    throw new Error("Error eliminando ");
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
    await updateDoc(userRef, newDataActualizada);
  } catch (error) {
    console.log("Error al actualizar item.", error);
    throw new Error("Error actualizando");
  }
}
// --------------LIKES--------------
export const darLike = async (id, uid, likes) => {
  const reference = doc(db, "tweets", id);
  const isMyFavorite = likes.some((like) => like === uid);
  if (isMyFavorite) {
    const [...rest] = likes;
    await updateDoc(reference, {
      likes: [...rest],
    });
  } else {
    await updateDoc(reference, {
      likes: [...likes, uid],
    });
  }
};

// --------------SINGIN--------------
// eslint-disable-next-line react-hooks/rules-of-hooks

export const auth = getAuth();
export const provider = new GoogleAuthProvider();
export const loginConGoogle = async () => {
  return signInWithPopup(auth, provider);
};
export const logout = () => signOut(auth);
