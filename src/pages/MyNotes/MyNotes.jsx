/* eslint-disable no-shadow */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import Alert from 'utils/Alert/Alert';
import ModalInfo from 'components/ModalWindow/ModalInfo';
import EditableRow from 'components/EditableRow/EditableRow';
import AddNote from 'components/AddNote';
import Header from './Header';
import Note from './Note';
import {
  HeadersStyled,
  Container,
  AlertReplacer,
  StyledTable,
  StyledTableContainer,
  RowHeaders,
} from './styled';

const MyNotes = ({
  notes,
  activeNote,
  isOpen,
  setEditNoteId,
  handleClose,
  handleFormSubmit,
  handleEditFormData,
  handleCancel,
  handleOpen,
  editNoteId,
  editFormData,
  currentNote,
  handleEdit,
  sortData,
  handleDragEnd,
  handleAddNote,
  handleDeleteNote,
  handleAddFormChange,
  handleShare,
  getUsersEmail,
  usersEmail,
  anchorEl,
  setChosenEmail,
  setUserIdShared,
  setAnchorEl,
}) => (
  <Container data-testid="notes_list">
    <Header />
    {!isOpen ? <Alert /> : <AlertReplacer />}
    {isOpen && (
      <ModalInfo
        notes={notes}
        handleClose={handleClose}
        isOpen={isOpen}
        currentNote={currentNote}
        handleShare={handleShare}
        usersEmail={usersEmail}
        getUsersEmail={getUsersEmail}
        setChosenEmail={setChosenEmail}
        setUserIdShared={setUserIdShared}
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
      />
    )}
    <AddNote
      handleAddNote={handleAddNote}
      handleAddFormChange={handleAddFormChange}
    />
    <StyledTableContainer component={Paper} align="center">
      <DragDropContext onDragEnd={handleDragEnd}>
        <form onSubmit={handleFormSubmit}>
          <StyledTable aria-label="sticky table">
            <TableHead>
              <RowHeaders>
                <HeadersStyled onClick={() => sortData('title')}>
                  Title
                </HeadersStyled>
                <HeadersStyled>Description</HeadersStyled>
                <HeadersStyled onClick={() => sortData('date')}>
                  Datе of creation
                </HeadersStyled>
                <HeadersStyled>Actions</HeadersStyled>
              </RowHeaders>
            </TableHead>
            <Droppable droppableId="droppable-1">
              {provider => (
                <TableBody ref={provider.innerRef} {...provider.droppableProps}>
                  {notes?.map((note, index) => (
                    <Draggable
                      key={note.id}
                      index={index}
                      draggableId={note.id}
                    >
                      {provider => (
                        <Fragment key={note.id}>
                          {editNoteId === note.id ? (
                            <EditableRow
                              note={note}
                              editFormData={editFormData}
                              handleEditFormData={handleEditFormData}
                              handleCancel={handleCancel}
                              ref={provider.innerRef}
                              {...provider.draggableProps}
                              provider={provider}
                            />
                          ) : (
                            <Note
                              data-testid="notes-list"
                              note={note}
                              activeNote={activeNote}
                              handleOpen={handleOpen}
                              setEditNoteId={setEditNoteId}
                              handleEdit={handleEdit}
                              handleDeleteNote={handleDeleteNote}
                              ref={provider.innerRef}
                              {...provider.draggableProps}
                              provider={provider}
                            />
                          )}
                        </Fragment>
                      )}
                    </Draggable>
                  ))}
                  {provider.placeholder}
                </TableBody>
              )}
            </Droppable>
          </StyledTable>
        </form>
      </DragDropContext>
    </StyledTableContainer>
  </Container>
);
MyNotes.defaultPropTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  activeNote: PropTypes.string,
  isOpen: PropTypes.bool,
  setEditNoteId: PropTypes.func,
  handleClose: PropTypes.func,
  handleFormSubmit: PropTypes.func,
  handleEditFormData: PropTypes.func,
  handleCancel: PropTypes.func,
  handleOpen: PropTypes.func,
  editNoteId: PropTypes.string,
  editFormData: PropTypes.string,
  currentNoteId: PropTypes.string,
  handleEdit: PropTypes.func,
  handleDeleteNote: PropTypes.func,
  handleAddNote: PropTypes.func,
  handleAddFormChange: PropTypes.func,
  sortData: PropTypes.func,
  handleDragEnd: PropTypes.func,
};
export default MyNotes;
