import React, { useState, useEffect } from 'react';

import { auth, ref, get, child, getDatabase } from '../../firebase';

import SharedNotes from './SharedNotes';

const SharedNotesContainer = () => {
  const [sharedNotes, setSharedNotes] = useState([]);

  const dbRef = ref(getDatabase());
  const userId = auth.currentUser.uid;

  const getSharedNotes = async () => {
    await get(child(dbRef, `users/${userId}/sharedNotes`))
      .then(snapshot => {
        const response = Object.values(snapshot.val());
        if (snapshot.exists()) {
          setSharedNotes(response);
        } else {
          console.log('No data available');
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleDragEnd = event => {
    if (event.destination) {
      const tempData = Array.from(sharedNotes);
      const [sourceData] = tempData.splice(event.source.index, 1);
      tempData.splice(event.destination.index, 0, sourceData);
      setSharedNotes(tempData);
    }
  };

  useEffect(() => {
    getSharedNotes();
  }, []);

  return (
    <SharedNotes
      getSharedNotes={getSharedNotes}
      handleDragEnd={handleDragEnd}
      sharedNotes={sharedNotes}
    />
  );
};

export default SharedNotesContainer;
