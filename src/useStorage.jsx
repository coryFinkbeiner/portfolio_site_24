import { useState, useEffect } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from './firebaseConfig';

function useStorage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storageRef = ref(storage, 'test/4_13 Resume .pdf');

    getDownloadURL(storageRef)
      .then((url) => {
        setData(url);
        // console.log(url)

      })
      .catch((err) => {
        console.error('Error getting download URL:', err);
        setError(err)
      });


  }, []);

  return { data, error }
}

export default useStorage