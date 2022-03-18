import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import AddNote from './AddNote';

describe('Add new note', () => {
  const defaultProps = {
    handleAddNote: jest.fn(),
    handleAddFormChange: jest.fn(),
  };
  const { getByTestId } = render(<AddNote {...defaultProps} />);

  it('Should render an AddNote container', () => {
    expect(getByTestId('add_new_note')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Add' })).toBeInTheDocument();
  });
});
