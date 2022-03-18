import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@mui/material/TableCell';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import ReorderIcon from '@mui/icons-material/Reorder';

import { Description, StyledTableRow, StyledTableRowSelected } from './styled';

const Note = ({
  note,
  handleOpen,
  activeNote,
  handleEdit,
  handleDeleteNote,
  provider,
}) => {
  const rowStyles = [
    StyledTableRow,
    note && note.id === activeNote ? '' : StyledTableRowSelected,
  ].join('');

  return (
    <StyledTableRow
      key={note.id}
      className={rowStyles}
      onClick={() => handleOpen(note.id)}
      {...provider.draggableProps}
      ref={provider.innerRef}
      data-testid="notes-list"
    >
      <TableCell align="center" scope="note">
        {note.title}
      </TableCell>
      <Description align="center">{note.description}</Description>
      <TableCell align="center" format="yyyy-MM-dd">
        {note.date}
      </TableCell>
      <TableCell>
        <Button>
          <EditIcon onClick={event => handleEdit(event, note)} />
        </Button>
        <Button>
          <DeleteIcon onClick={event => handleDeleteNote(event, note.id)} />
        </Button>
        <Button {...provider.dragHandleProps}>
          <ReorderIcon />
        </Button>
      </TableCell>
    </StyledTableRow>
  );
};
Note.defaultPropTypes = {
  note: PropTypes.object,
  handleOpen: PropTypes.func,
  activeNote: PropTypes.string,
  handleEdit: PropTypes.func,
  handleShare: PropTypes.func,
  handleDeleteNote: PropTypes.func,
};
export default Note;
