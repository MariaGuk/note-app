import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@mui/material/TableCell';
import { StyledInput, Button, ButtonLeft, StyledTableRow } from './styled';

const EditableRow = ({ editFormData, handleEditFormData, handleCancel }) => (
  <StyledTableRow data-testid="editable_note">
    <TableCell>
      <StyledInput
        type="text"
        required="required"
        placeholder="Enter a title..."
        name="title"
        value={editFormData.title}
        onChange={handleEditFormData}
      />
    </TableCell>
    <TableCell>
      <StyledInput
        type="text"
        required="required"
        placeholder="Enter a description..."
        name="description"
        value={editFormData.description}
        onChange={handleEditFormData}
      />
    </TableCell>
    <TableCell>
      <StyledInput
        type="text"
        required="required"
        placeholder="Enter a date of creation..."
        name="date"
        value={editFormData.date}
        onChange={handleEditFormData}
      />
    </TableCell>
    <TableCell>
      <ButtonLeft type="submit">Save</ButtonLeft>
      <Button type="button" onClick={handleCancel}>
        Cancel
      </Button>
    </TableCell>
  </StyledTableRow>
);
EditableRow.defaultPropTypes = {
  handleEditFormData: PropTypes.func,
  handleCancel: PropTypes.func,
  editFormData: PropTypes.func,
};
export default EditableRow;
