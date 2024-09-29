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
    // const storageRef = ref(storage, 'test/4_13 Resume .pdf');
    const folderRef = ref(storage, 'test');


    listAll(folderRef)
      .then((res) => {

        const fileUrls = {};

        res.items.forEach((itemRef) => {
          // Get the download URL for each file
          getDownloadURL(itemRef)
            .then((url) => {
              // Store the URL in the fileUrls object using the file name as the key
              fileUrls[itemRef.name] = url;
              setData(fileUrls); // Update the state with the new file URLs
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







    // getDownloadURL(storageRef)
    //   .then((url) => {
    //     // setData((prevData) => ({
    //     //   ...prevData,
    //     //   resume: url, // Only update the 'resume' key
    //     // }));
    //     console.log({url})

    //   })
    //   .catch((err) => {
    //     console.error('Error getting download URL:', err);
    //     setError(err)
    //   });

  }, []);

  return { data, error }
}

export default useStorage