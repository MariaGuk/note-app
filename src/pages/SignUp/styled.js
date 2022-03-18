import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Box = styled('div')({
  backgroundColor: '#c7b7fb',
  backgroundSize: 'cover',
  minHeight: '100vh',
  paddingTop: '50px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Header = styled('h2')({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '14px',
});

const FormWrapper = styled('div')({
  backgroundColor: '#c8a6db52',
  padding: '30px 90px',
  borderRadius: '14px',
});

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '190px',
});

const StyledButton = styled(Button)({
  fontSize: '16px',
  letterSpacing: '0.4px',
  marginTop: '10px',
  marginBottom: '8px'
});

const StyledLink = styled(Link)({
  textDecoration: 'none',
  fontSize: '20px',
  marginTop: '8px',
});

const ButtonsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
});

export { Box, Header, Form, FormWrapper, StyledButton, StyledLink, ButtonsContainer };