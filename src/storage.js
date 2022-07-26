import { getStorage, 
    ref, 
    uploadBytes,
    getDownloadURL} from './firebaseConfig.js';

export const imageUrl = async(urlImg, file) => {
    const refImage = ref (storage, `postsImagen/${urlImg}`);
    await uploadBytes (refImage,file);
    const urlReturn = getDownloadURL(refImage);
    console.log(urlReturn);
    return urlReturn;
    
}
