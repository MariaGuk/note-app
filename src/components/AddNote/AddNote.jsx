import { TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import React from 'react';
import { StyledTitle, StyledForm, Button } from './styled';

const AddNote = ({ handleAddNote, handleAddFormChange }) => (
  <>
    <StyledTitle data-testid="add_new_note">Add a new note</StyledTitle>
    <StyledForm onSubmit={handleAddNote}>
      <Stack
        direction="row"
        justifyContent="space-around"
        alignItems="center"
        spacing={3}
      >
        <TextField
          type="text"
          name="title"
          required
          placeholder="Enter a title..."
          onChange={handleAddFormChange}
        />
        <TextField
          multiline
          maxRows={2}
          type="text"
          name="description"
          required
          placeholder="Enter a description..."
          onChange={handleAddFormChange}
        />
        <TextField
          type="date"
          name="date"
          format="yyyy-MM-dd"
          required
          placeholder="Enter a date of creation ..."
          onChange={handleAddFormChange}
        />
        <Button type="submit">Add</Button>
      </Stack>
    </StyledForm>
  </>
);

export default AddNote;
