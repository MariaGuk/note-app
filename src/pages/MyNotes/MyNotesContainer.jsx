import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';

import NOTES from 'constants/noteList';
import {
  auth,
  database,
  ref,
  set,
  get,
  child,
  getDatabase,
} from '../../firebase';

import MyNotes from './MyNotes';

const MyNotesContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [editNoteId, setEditNoteId] = useState(null);
  const [activeNote, setActiveNote] = useState(null);
  const [order, setOrder] = useState('ASC');
  const [usersEmail, setUsersEmail] = useState([]);
  const [sharedNote, setSharedNote] = useState();
  const [userIdShared, setUserIdShared] = useState(null);
  const [anchorEl, setAnchorEl] = useState(null);
  const [chosenEmail, setChosenEmail] = useState(null);
  const [users, setUsers] = useState([]);
  const [user] = useState(localStorage.getItem('userEmail'));
  const [notes, setNotes] = useState(
    localStorage.notes ? JSON.parse(localStorage.notes) : NOTES
  );
  const [editFormData, setEditFormData] = useState({
    title: '',
    description: '',
    date: '',
  });
  const [addNewNote, setAddNewNote] = useState({
    title: '',
    description: '',
    date: '',
  });
  const uniqId = nanoid();

  const getActiveNote = () => notes.find(({ id }) => id === activeNote);

  const currentNote = getActiveNote();

  // firebase
  const dbRef = ref(getDatabase());

  const saveNotes = async () => {
    const userId = auth.currentUser.uid;
    await set(ref(database, `users/${userId}/myNotes`), {
      userEmail: user,
      userID: userId,
      notes,
    });
  };

  const getNotes = async () => {
    const userId = auth.currentUser.uid;
    await get(child(dbRef, `users/${userId}/myNotes`))
      .then(snapshot => {
        const response = Object.values(snapshot.val());
        if (snapshot.exists()) {
          setNotes(response[0]);
        } else {
          console.log('No data available');
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  // share
  const getUsersEmail = async () => {
    await get(child(dbRef, 'users'))
      .then(snapshot => {
        const response = Object.values(snapshot.val()).map(tab => tab.myNotes);
        if (snapshot.exists()) {
          const usersEmails = response.map(emails => emails.userEmail);
          setUsersEmail(usersEmails);
          setUsers(response);
        } else {
          console.log('No data available');
        }
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handleShare = event => {
    event.stopPropagation();

    const getActiveEmail = () =>
      users.find(member => member.userEmail === chosenEmail);
    const activeEmail = getActiveEmail();

    const email = event.target.textContent;
    setChosenEmail(email);
    setSharedNote(currentNote);
    setUserIdShared(activeEmail.userID);
    setAnchorEl(null);

    if (userIdShared !== null) {
      set(ref(database, `users/${userIdShared}/sharedNotes/${uniqId}`), {
        date: sharedNote.date,
        description: sharedNote.description,
        id: sharedNote.id,
        title: sharedNote.title,
      });
      alert(`Shared with ${email}`);
    }
  };

  const handleAddFormChange = event => {
    event.preventDefault();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newNoteData = { ...addNewNote };
    newNoteData[fieldName] = fieldValue;

    setAddNewNote(newNoteData);
  };

  const handleAddNote = event => {
    event.preventDefault();

    const newNote = {
      id: nanoid(),
      title: addNewNote.title,
      description: addNewNote.description,
      date: addNewNote.date,
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);

    event.target.reset();
    alert('New note was added');
  };

  const handleDeleteNote = (event, noteId) => {
    event.stopPropagation();
    const newNotes = [...notes];

    const index = notes.findIndex(note => note.id === noteId);
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  const handleOpen = noteId => {
    getActiveNote();
    setIsOpen(true);
    setActiveNote(noteId);
    getNotes();
  };

  const handleClose = () => {
    getActiveNote(activeNote);
    setIsOpen(false);
    setActiveNote(null);
  };

  const handleEdit = (event, note) => {
    event.stopPropagation();
    setEditNoteId(note.id);

    const formValues = {
      title: note.title,
      description: note.description,
      date: note.date,
    };

    setEditFormData(formValues);
  };

  const handleEditFormData = event => {
    event.stopPropagation();

    const fieldName = event.target.getAttribute('name');
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    const editedNote = {
      id: editNoteId,
      title: editFormData.title,
      description: editFormData.description,
      date: editFormData.date,
    };

    const newNotes = [...notes];
    const index = notes.findIndex(note => note.id === editNoteId);

    newNotes[index] = editedNote;

    setNotes(newNotes);
    setEditNoteId(null);
  };

  const handleCancel = () => {
    setEditNoteId(null);
  };

  const sortData = field => {
    if (order === 'ASC') {
      const sorted = [...notes].sort((a, b) =>
        a[field].toLowerCase() > b[field].toLowerCase() ? 1 : -1
      );
      setNotes(sorted);
      setOrder('DSC');
    }
    if (order === 'DSC') {
      const sorted = [...notes].sort((a, b) =>
        a[field].toLowerCase() < b[field].toLowerCase() ? 1 : -1
      );
      setNotes(sorted);
      setOrder('ASC');
    }
  };

  const handleDragEnd = e => {
    if (!e.destination) return;
    const tempData = Array.from(notes);
    const [sourceData] = tempData.splice(e.source.index, 1);
    tempData.splice(e.destination.index, 0, sourceData);
    setNotes(tempData);
  };

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
    saveNotes();
  }, [notes]);

  return (
    <MyNotes
      notes={notes}
      activeNote={activeNote}
      isOpen={isOpen}
      setEditNoteId={setEditNoteId}
      handleClose={handleClose}
      handleFormSubmit={handleFormSubmit}
      handleEditFormData={handleEditFormData}
      handleCancel={handleCancel}
      handleOpen={handleOpen}
      editNoteId={editNoteId}
      editFormData={editFormData}
      currentNote={currentNote}
      handleEdit={handleEdit}
      sortData={sortData}
      handleDragEnd={handleDragEnd}
      handleAddNote={handleAddNote}
      handleDeleteNote={handleDeleteNote}
      handleAddFormChange={handleAddFormChange}
      handleShare={handleShare}
      getUsersEmail={getUsersEmail}
      usersEmail={usersEmail}
      anchorEl={anchorEl}
      setChosenEmail={setChosenEmail}
      setUserIdShared={setUserIdShared}
      setAnchorEl={setAnchorEl}
    />
  );
};

export default MyNotesContainer;
