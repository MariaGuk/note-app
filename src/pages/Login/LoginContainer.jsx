import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { loginInitiate } from 'redux/actions';
import { loginValidation } from 'utils/validation';

import Login from './Login';

const LoginContainer = () => {
  const { currentUser } = useSelector(state => state.user);
  const navigate = useNavigate();
  const [isShown, setIsShown] = useState(false);

  const toggleShown = () => {
    setIsShown(prevState => !prevState);
  };

  useEffect(() => {
    if (currentUser) {
      navigate('/notes');
    }
  }, [currentUser, navigate]);
  
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginValidation,
    onSubmit: values => {
      if (values) {
        dispatch(loginInitiate(values.email, values.password));
      }
    },
  });

  return <Login formik={formik} isShown={isShown} toggleShown={toggleShown} />;
};

export default LoginContainer;
