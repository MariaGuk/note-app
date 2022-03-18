import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import EditableRow from './EditableRow';

describe('EditableRow', () => {
  const defaultProps = {
    editFormData: jest.fn(),
    handleEditFormData: jest.fn(),
    handleCancel: jest.fn(),
  };
  const { getByTestId } = render(<EditableRow {...defaultProps} />);

  it('Should render an EditNote container', () => {
    expect(getByTestId('editable_note')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Save' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Cancel' })).toBeInTheDocument();
  });
});
