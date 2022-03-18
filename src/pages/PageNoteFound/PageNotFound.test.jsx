import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import PageNotFound from './PageNotFound';

describe('PageNotFound', () => {
  const defaultProps = {};

  const { getByTestId } = render(<PageNotFound {...defaultProps} />);

  it('Should render a Not Found Page', () => {
    expect(getByTestId('page_not_found')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Back' })).toBeInTheDocument();
  });
});
