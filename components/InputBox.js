import Image from 'next/image';
import { useSession } from 'next-auth/client';
import { EmojiHappyIcon } from '@heroicons/react/outline';
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid';
import { useRef, useState } from 'react';
import { db, storage } from '../firebase';
import firebase from 'firebase';

function InputBox() {
  const [session] = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  const sendPost = (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;
    db.collection('posts')
      .add({
        message: inputRef.current.value,
        name: session.user.name,
        email: session.user.email,
        image: session.user.image,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then((doc) => {
        if (imageToPost) {
          const uploadTask = storage.ref(`uploads/posts/${doc.id}`).putString(imageToPost, 'data_url');
          removeImage();
          uploadTask.on(
            'state_change',
            null,
            (error) => console.error(error),
            () => {
              //When the upload completes
              storage
                .ref(`uploads/posts/${doc.id}`)
                .getDownloadURL()
                .then((url) => db.collection('posts').doc(doc.id).set({ postImage: url }, { merge: true }));
            }
          );
          inputRef.current.value = '';
        }
      });
  };
  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }
    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };
  const removeImage = () => {
    setImageToPost(null);
  };
  return (
    <div className='bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
      <div className='flex space-x-4 p-4 items-center'>
        <Image className='rounded-full' src={session.user.image} width={40} height={40} layout='fixed' />
        <form className='flex flex-1'>
          <input
            className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none'
            type='text'
            ref={inputRef}
            placeholder={`No que você está pensando, ${session.user.name.split(/[ ,]+/)[0]}?`}
          />
          <button hidden type='submit' onClick={sendPost}>
            Submit
          </button>
        </form>
        {imageToPost && (
          <div
            onClick={removeImage}
            className='flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer'
          >
            <img className='h-10 object-contain' src={imageToPost} alt='' />
            <p className='text-xs text-red-500 text-center'>Remover</p>
          </div>
        )}
      </div>
      <div className='flex justify-evenly p-3 border-t'>
        <div className='inputIcon'>
          <VideoCameraIcon className='h-7 text-red-500' />
          <p className='text-xs sm:text-sm xl:text-base'>Vídeo ao vivo</p>
        </div>
        <div onClick={() => filePickerRef.current.click()} className='inputIcon'>
          <CameraIcon className='h-7 text-green-400' />
          <p className='text-xs sm:text-sm xl:text-base'>Foto/Vídeo</p>
          <input onChange={addImageToPost} ref={filePickerRef} type='file' hidden />
        </div>
        <div className='inputIcon'>
          <EmojiHappyIcon className='h-7 text-yellow-300' />
          <p className='text-xs sm:text-sm xl:text-base'>Sentimento/atividade</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
