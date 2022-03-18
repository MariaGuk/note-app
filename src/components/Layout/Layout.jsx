import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import { logoutInitiate } from 'redux/actions';
import { ROUTES, ROUTEPATHS } from 'constants/routes';

import { useStyles, StyledBox } from './styled';

const Layout = ({ children }) => {
  const classes = useStyles();

  const { currentUser: user } = useSelector(state => ({ ...state.user }));
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutInitiate());
  };

  return (
    <>
      <StyledBox position="static" className={classes.box}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <nav className={classes.navigation}>
              {ROUTES.map(
                route =>
                  route.isShown && (
                    <Link
                      key={route.path}
                      className={classes.link}
                      to={route.path}
                    >
                      {route.title}
                    </Link>
                  )
              )}
              {user && (
                <Link
                  to={ROUTEPATHS.login}
                  className={classes.link}
                  onClick={handleLogOut}
                >
                  Logout
                </Link>
              )}
            </nav>
          </Toolbar>
        </Container>
      </StyledBox>
      {children}
    </>
  );
};
Layout.defaultPropTypes = {
  children: PropTypes.object,
};
export default Layout;
