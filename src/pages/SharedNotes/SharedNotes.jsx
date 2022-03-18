/* eslint-disable no-shadow */
import React from 'react';
import PropTypes from 'prop-types';
import TableBody from '@mui/material/TableBody';
import Paper from '@mui/material/Paper';
import TableHead from '@mui/material/TableHead';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

import SharedNote from './SharedNote';
import {
  HeadersStyled,
  Container,
  StyledHeader,
  StyledTableContainer,
  StyledTable,
  RowHeaders,
} from './styled';

const SharedNotes = ({ handleDragEnd, sharedNotes }) => (
  <Container data-testid="sharedNotes_list">
    <StyledHeader>Shared notes</StyledHeader>
    <StyledTableContainer component={Paper} align="center">
      <DragDropContext onDragEnd={handleDragEnd}>
        <form>
          <StyledTable aria-label="sticky table">
            <TableHead>
              <RowHeaders>
                <HeadersStyled>Title</HeadersStyled>
                <HeadersStyled>Description</HeadersStyled>
                <HeadersStyled>Datе of creation</HeadersStyled>
                <HeadersStyled>Actions</HeadersStyled>
              </RowHeaders>
            </TableHead>
            <Droppable droppableId="droppable-1">
              {provider => (
                <TableBody ref={provider.innerRef} {...provider.droppableProps}>
                  {sharedNotes.map((sharedNote, index) => (
                    <Draggable
                      key={sharedNote.id}
                      index={index}
                      draggableId={sharedNote.id}
                    >
                      {provider => (
                        <SharedNote
                          sharedNote={sharedNote}
                          data-testid="sharedNotes-list"
                          sharedNotes={sharedNotes}
                          ref={provider.innerRef}
                          {...provider.draggableProps}
                          provider={provider}
                        />
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
SharedNotes.defaultPropTypes = {
  handleDragEnd: PropTypes.func,
  sharedNotes: PropTypes.array,
};
export default SharedNotes;
