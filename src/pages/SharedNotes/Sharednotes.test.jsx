import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import SharedNotes from './SharedNotes';

describe('SharedNotes', () => {
  const defaultProps = {
    handleDragEnd: jest.fn(),
    sharedNotes: [],
  };

  const { getByTestId } = render(<SharedNotes {...defaultProps} />);

  it('It displays a list of shared notes', () => {
    expect(getByTestId('sharedNotes_list')).toBeInTheDocument();
  });
});
