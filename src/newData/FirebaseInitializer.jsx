import { useEffect } from 'react';
import { getDocument } from '../services/firebaseService';
import useFirebaseStore from '../stores/firebaseStore.js';

const FirebaseInitializer = (document) => {
  const { setTexts } = useFirebaseStore();

  useEffect(() => {
    const initializeFirebase = async () => {
      try {
        const texts = await getDocument('pagina', document.document);
        setTexts(texts);
      } catch (error) {
        console.log('Error al cargar las transacciones iniciales', error);
      }
    };
    initializeFirebase();
  }, []);

};

export default FirebaseInitializer;
