import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import {app } from "./firebase";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';

export const db = getFirestore(app);

// Get a list of cities from your database
//aqui
export async function getUsers() {
  const usersCol = collection(db, "users");
  const usersSnapshot = await getDocs(usersCol);
  const usersList = usersSnapshot.docs.map((doc) => doc.data());
  return usersList;
}