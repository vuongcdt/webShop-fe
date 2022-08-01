import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytes } from 'firebase/storage';

const firebaseConfig = {
    apiKey: 'AIzaSyA1TIXd0MM2ba8MB8IvGSG99cPNR88FDTo',
    authDomain: 'mindx-voxo.firebaseapp.com',
    databaseURL:
        'https://mindx-voxo-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'mindx-voxo',
    storageBucket: 'mindx-voxo.appspot.com',
    messagingSenderId: '930278192732',
    appId: '1:930278192732:web:17f5951f86515dc37e9899',
};
const firebaseApp = initializeApp(firebaseConfig);

const storageFireBase = getStorage(firebaseApp);

export { storageFireBase };
