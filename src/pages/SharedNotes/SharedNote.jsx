import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@mui/material/TableCell';
import Button from '@mui/material/Button';
import ReorderIcon from '@mui/icons-material/Reorder';

import { StyledTableRow, Description } from './styled';

const SharedNote = ({ sharedNote, provider }) => (
  <StyledTableRow
    key={sharedNote.id}
    {...provider.draggableProps}
    ref={provider.innerRef}
    data-testid="sharedNotes-list"
  >
    <TableCell align="center" scope="note">
      {sharedNote.title}
    </TableCell>
    <Description align="center">{sharedNote.description}</Description>
    <TableCell align="center" format="yyyy-MM-dd">
      {sharedNote.date}
    </TableCell>
    <TableCell>
      <Button {...provider.dragHandleProps}>
        <ReorderIcon />
      </Button>
    </TableCell>
  </StyledTableRow>
);
SharedNote.defaultPropTypes = {
  sharedNote: PropTypes.object,
};
export default SharedNote;
