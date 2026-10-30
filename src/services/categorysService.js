import {
  collection,
  doc,
  getDocs,
  increment,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase/config";

const categoriesRef = collection(db, "categories");

export const getCategories = async () => {
  try {
    //captura del momento, es un QuerySnapshot
    const snapshot = await getDocs(categoriesRef);

    const categoriesFormat = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    return categoriesFormat;
  } catch (error) {
    console.log("Error al traer categorias", error);
    throw error;
  }
};

export const addCategorie = async (category) => {
  try {
    // Psamos nombre de la categoría directamente como el ID del documento
    const categoryRef = doc(categoriesRef, category);

    // setDoc con { merge: true } actualiza si existe o crea si no existe.
    // Firestore increment() maneja automáticamente el valor (si no existe, lo inicia en 0 y le suma 1).
    await setDoc(
      categoryRef,
      {
        name: category,
        count: increment(1),
      },
      { merge: true },
    );
  } catch (error) {
    console.error("Error al gestionar categoría:", error);
    throw error;
  }
};
