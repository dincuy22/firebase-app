import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "./firebase";

// GET ALL
export const getUsers = async () => {
  const userRef = collection(db, "users");
  const querySnapshot = await getDocs(userRef);

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    console.log(doc.id, " => ", doc.data());
  });
};

// GET
export const getUser = async (userId) => {
  const docRef = doc(db, "users", userId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};

// Mempelai
// CREATE
export const createMempelai = async (mempelai) => {
  const docRef = await addDoc(collection(db, "mempelai"), mempelai);

  return docRef;
};

// UPDATE
export const updateMempelai = async (mempelaiId) => {
  const docRef = await updateDoc(doc(db, "mempelai", mempelaiId), {
    // data yang mau diupdate
  });
  console.log("Document written with ID: ", docRef.id);
};

// Acara
export const createAcara = async (mempelaiId) => {
  try {
    // Add a new document in collection "acara"
    await setDoc(doc(db, "acara", mempelaiId), {
      jadwal: {
        tgl: "Sabtu, 10 november 2023",
        pukul: "10:00 wib",
      },
      lokasi: "rumah bapak",
      alamat: "desa sanghiang",
    });
  } catch (error) {}
};
