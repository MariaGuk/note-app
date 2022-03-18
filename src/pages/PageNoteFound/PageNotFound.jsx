import React from 'react';
import PropTypes from 'prop-types';
import { Box, Header, StyledLink } from './styled';

const PageNotFound = ({ navigate }) => (
  <Box data-testid="page_not_found">
    <Header>404 not found</Header>
    <StyledLink type="submit" onClick={() => navigate('/login')}>
      Back
    </StyledLink>
  </Box>
);
PageNotFound.defaultPropTypes = {
  navigate: PropTypes.func,
};
export default PageNotFound;
