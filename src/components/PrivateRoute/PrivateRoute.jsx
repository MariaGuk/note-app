import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { ROUTEPATHS } from 'constants/routes';

const PrivateRoute = ({ children }) => {
  const { currentUser: user } = useSelector(state => ({ ...state.user }));

  return user ? children : <Navigate to={ROUTEPATHS.login} />;
};

export default PrivateRoute;
