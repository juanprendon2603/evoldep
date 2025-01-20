import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase";

export const getDocument = async (collectionName, documentId) => {
  const docRef = doc(db, collectionName, documentId);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    return docSnap.data();
  } else {
    console.error("El documento no existe");
    return null;
  }
};

export const getAllDocuments = async (collectionName) => {
  const colRef = collection(db, collectionName);
  const snapshot = await getDocs(colRef);

  const documents = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data(),
  }));

  return documents;
};
