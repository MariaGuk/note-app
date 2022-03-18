import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

import FORMDATA from 'constants/formData';
import { signupInitiate } from 'redux/actions';
import { signUpValidation } from 'utils/validation';

import SignUp from './SignUp';

const SignUpContainer = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { currentUser } = useSelector(state => state.user);

  const getInitialValues = FORMDATA.reduce((initialValues, formItem) => {
    initialValues[formItem.id] = formItem.initialValue;
    return initialValues;
  }, {});

  const formik = useFormik({
    initialValues: getInitialValues,
    validationSchema: signUpValidation,
    onSubmit: values => {
      if (values) {
        dispatch(
          signupInitiate(
            values.dateOfBirthDay,
            values.email,
            values.firstName,
            values.lastName,
            values.password
          )
        );
      }
    },
  });

  useEffect(() => {
    if (currentUser) {
      navigate('/notes');
    }
  }, [currentUser, navigate]);

  return <SignUp formik={formik} />;
};

export default SignUpContainer;
