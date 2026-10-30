import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase/config";
import { addCategorie } from "./categorysService";

const productsRef = collection(db, "products");

export const getProducts = async () => {
  try {
    //captura del momento, es un QuerySnapshot
    const snapshot = await getDocs(productsRef);

    const productsFormat = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });

    return productsFormat;
  } catch (error) {
    console.log("Error al traer productos", error);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const productRef = doc(productsRef, id);
    const snapshot = await getDoc(productRef);

    if (snapshot.exists()) {
      const product = { id: snapshot.id, ...snapshot.data() };
      console.log("Doc:", product);
      return product;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error al traer producto por ID:", error);
    throw error;
  }
};
export const getByCategory = async (category) => {
  //AGREGAR CATEGORIAS
  try {
    let queryRef;

    if (category) {
      queryRef = query(productsRef, where("category", "==", category));
    } else {
      queryRef = productsRef;
    }

    const snapshot = await getDocs(queryRef);
    const productsFormat = snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    });
    return productsFormat;
  } catch (error) {
    console.error("Error al filtrar productos:", error);
    throw error;
  }
};

export const createProduct = async (productData) => {
  try {
    await addCategorie(productData.category);
    const docRef = await addDoc(productsRef, productData);
    return docRef.id; //AGREGAR VISTA DE EXITO O QUE ME LLEVE A ESA PESTAÑA
  } catch (error) {
    console.error("Error al crear producto:", error);
    throw error;
  }
};
