import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { ROUTEPATHS } from 'constants/routes';
import { setUser } from 'redux/actions';
import Layout from 'components/Layout';

import PrivateRoute from 'components/PrivateRoute';
import MyNotesContainer from 'pages/MyNotes/MyNotesContainer';
import PageNotFoundContainer from 'pages/PageNoteFound/PageNotFoundContainer';
import SharedNotesContainer from 'pages/SharedNotes/SharedNotesContainer';
import AboutContainer from 'pages/About';
import LoginContainer from 'pages/Login';
import SignUp from 'pages/SignUp';

import { auth } from './firebase';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);

  return (
    <Layout>
      <Routes>
        <Route
          path={ROUTEPATHS.myNotes}
          element={
            <PrivateRoute>
              <MyNotesContainer />
            </PrivateRoute>
          }
        />
        <Route
          path={ROUTEPATHS.sharedNotes}
          element={
            <PrivateRoute>
              <SharedNotesContainer />
            </PrivateRoute>
          }
        />
        <Route path={ROUTEPATHS.notFound} element={<PageNotFoundContainer />} />
        <Route path={ROUTEPATHS.about} element={<AboutContainer />} />
        <Route path={ROUTEPATHS.login} element={<LoginContainer />} />
        <Route path={ROUTEPATHS.signUp} element={<SignUp />} />
      </Routes>
    </Layout>
  );
}
