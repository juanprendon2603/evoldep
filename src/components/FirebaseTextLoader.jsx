import { useState, useEffect } from "react";
import  useFirebaseStore  from "../stores/firebaseStore.js"; 
import { getDocument } from '../services/firebaseService';

const FirebaseTextLoader = ({ typeText }) => {
  const { texts } = useFirebaseStore();
  return <>{texts?.[typeText]}</>;
};

export default FirebaseTextLoader;
