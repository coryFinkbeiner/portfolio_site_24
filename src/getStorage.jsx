import { useState, useEffect } from 'react';
import { ref, getDownloadURL } from 'firebase/storage';
import { storage } from './firebaseConfig';

function getStorage() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('here')
    getDownloadURL(ref(storage, 'test/4_13 Resume .pdf'))
      .then((url) => {
        console.log(url)
      })
      .catch((error) => {
        // Handle any errors
      });
  }, []);

  // ... rest of your component logic
}

export default MyComponent;