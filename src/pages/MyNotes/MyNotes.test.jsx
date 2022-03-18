import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import MyNotes from './MyNotes';

describe('MyNotes', () => {
  const defaultProps = {
    notes: [],
    activeNote: null,
    isOpen: false,
    setEditNoteId: jest.fn(),
    handleClose: jest.fn(),
    handleFormSubmit: jest.fn(),
    handleEditFormData: jest.fn(),
    handleCancel: jest.fn(),
    handleOpen: jest.fn(),
    editNoteId: jest.fn(),
    editFormData: jest.fn(),
    currentNote: {},
    handleEdit: jest.fn(),
    handleDeleteNote: jest.fn(),
    handleAddNote: jest.fn(),
    handleAddFormChange: jest.fn(),
    sortData: jest.fn(),
    handleDragEnd: jest.fn(),
  };

  const { getByTestId } = render(<MyNotes {...defaultProps} />);

  it('It displays a list of notes', () => {
    expect(getByTestId('notes_list')).toBeInTheDocument();
  });
});
