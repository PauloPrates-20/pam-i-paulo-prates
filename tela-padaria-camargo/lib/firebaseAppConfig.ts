import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyC2_3HfjkOHMsG5B5DuKe5-TGVduYTAr3c",
    authDomain: "padaria-camargo.firebaseapp.com",
    projectId: "padaria-camargo",
    storageBucket: "padaria-camargo.appspot.com",
    messagingSenderId: "567243953063",
    appId: "1:567243953063:web:77ba6d4a98c13d66d49c82"
};

export const firebaseApp = initializeApp(firebaseConfig);