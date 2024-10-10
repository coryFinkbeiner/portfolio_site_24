import { useState, useEffect } from 'react';
import { ref, getDownloadURL, listAll } from 'firebase/storage';
import { storage } from './firebaseConfig';

function useStorage() {
  const [data, setData] = useState({
    home: null,
    resume: null,
    github: null,
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    const folderRef = ref(storage, 'test');


    listAll(folderRef)
      .then((res) => {

        const fileUrls = {};

        res.items.forEach((itemRef) => {
          getDownloadURL(itemRef)
            .then((url) => {
              fileUrls[itemRef.name] = url;
              setData(fileUrls);
            })
            .catch((err) => {
              console.error('Error getting download URL:', err);
              setError(err);
            });
        });
      })
      .catch((err) => {
        console.error('Error listing files:', err);
        setError(err);
      });

  }, []);

  return { data, error }
}

export default useStorage