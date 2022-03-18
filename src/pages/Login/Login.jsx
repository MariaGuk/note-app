import React from 'react';
import TextField from '@mui/material/TextField';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import PropTypes from 'prop-types';

import FORMDATA from 'constants/formData';
import { ROUTEPATHS } from 'constants/routes';

import {
  Box,
  Header,
  Form,
  FormWrapper,
  StyledButton,
  StyledLink,
  ButtonsContainer,
  StyledEye,
} from './styled';

const Login = ({ formik, isShown, toggleShown }) => (
  <Box>
    <FormWrapper>
      <Header>Login</Header>
      <Form onSubmit={formik.handleSubmit}>
        {FORMDATA.map(
          data =>
            data.login && (
              <TextField
                key={data.id}
                id={data.id}
                label={data.label}
                name={data.name}
                type={isShown ? 'text' : `${data.type}`}
                required={data.required}
                variant="outlined"
                margin="normal"
                size="medium"
                onChange={formik.handleChange}
                error={!!formik.errors[data.id]}
                helperText={formik.errors[data.id]}
              />
            )
        )}
        <StyledEye type="button" onClick={toggleShown}>
          {isShown ? <VisibilityOffOutlinedIcon /> : <VisibilityOutlinedIcon />}
        </StyledEye>
        <ButtonsContainer>
          <StyledButton size="small" type="submit">
            Login
          </StyledButton>
          <span>Need an account?</span>
          <StyledLink to={ROUTEPATHS.signUp}>SignUp</StyledLink>
        </ButtonsContainer>
      </Form>
    </FormWrapper>
  </Box>
);
Login.defaultPropTypes = {
  formik: PropTypes.object,
  shown: PropTypes.string,
  toggleShown: PropTypes.func,
};
export default Login;
