import { firestoreDb } from "./firestoreConfig";
import { collection, getDocs} from "firebase/firestore";

interface MenuItem {
    id: number;
    name: string;
    price: number;
    image: string;
}

export async function readAll(): Promise<MenuItem[]> {
    const query = collection(firestoreDb, 'menu');

    const snapshot = await(getDocs(query));

    const data = snapshot.docs.map((doc) => {
       const item = doc.data();

       return {
        id: item.id,
        name: item.name,
        price: item.price,
        image: item.image
       }
    });

    return data;
}