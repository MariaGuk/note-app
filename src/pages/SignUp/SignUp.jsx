import React from 'react';
import TextField from '@mui/material/TextField';
import PropTypes from 'prop-types';

import { ROUTEPATHS } from 'constants/routes';
import FORMDATA from 'constants/formData';

import {
  Box,
  Header,
  Form,
  FormWrapper,
  StyledButton,
  StyledLink,
  ButtonsContainer,
} from './styled';

const SignUp = ({ formik }) => (
  <Box>
    <FormWrapper>
      <Header>Sign Up</Header>
      <Form onSubmit={formik.handleSubmit}>
        {FORMDATA.map(data => (
          <TextField
            key={data.id}
            id={data.id}
            label={data.label}
            name={data.name}
            type={data.type}
            required={data.required}
            variant="outlined"
            margin="normal"
            size="small"
            onChange={formik.handleChange}
            error={!!formik.errors[data.id]}
            helperText={formik.errors[data.id]}
          />
        ))}
        <ButtonsContainer>
          <StyledButton size="small" type="submit">
            Sing Up
          </StyledButton>
          <span>Already have an account?</span>
          <StyledLink to={ROUTEPATHS.login}>Login</StyledLink>
        </ButtonsContainer>
      </Form>
    </FormWrapper>
  </Box>
);
SignUp.defaultPropTypes = {
  formik: PropTypes.object,
};

export default SignUp;
