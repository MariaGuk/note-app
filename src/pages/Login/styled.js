import styled from 'styled-components'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';


const Box = styled('div')({
  backgroundColor: '#c7b7fb',
  backgroundSize: 'cover',
  minHeight: '100vh',
  paddingTop: '90px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});
const Header = styled('h2')({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '16px',
});
const FormWrapper = styled('div')({
  backgroundColor: '#c8a6db52',
  padding: '40px 70px',
  borderRadius: '14px',
})

const Form = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

const StyledButton = styled(Button)({
  fontSize: '16px',
  letterSpacing: '0.5px',
  marginBottom: '8px'
});

const StyledLink = styled(Link)({
  textDecoration: 'none',
  letterSpacing: '0.5px',
  fontSize: '18px',
  marginTop: '10px',
});
const ButtonsContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  alignItems: 'center',
  marginTop: '14px'
});

const StyledEye = styled('button')({
  border: 'none',
  outline: 'none',
  backgroundColor: 'transparent',
  marginLeft: '184px',
  marginTop: '120px',
  position: 'absolute'
})

export { Box, Header, Form, FormWrapper, StyledButton, StyledLink, ButtonsContainer, StyledEye };
