import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';

import ShareButtonContainer from './ShareButtonContainer';

describe('Add new note', () => {
  const defaultProps = {
    getUsersEmail: jest.fn(),
    usersEmail: [],
    handleShare: jest.fn(),
    setChosenEmail: jest.fn(),
    setUserIdShared: jest.fn(),
    anchorEl: '',
    setAnchorEl: jest.fn(),
  };
  const { getByTestId } = render(<ShareButtonContainer {...defaultProps} />);

  it('Should render a ShareButtonContainer container', () => {
    expect(getByTestId('share_button')).toBeInTheDocument();
  });
});
