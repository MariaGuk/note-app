import styled from 'styled-components';

const Box = styled('div')({
  backgroundColor: '#c7b7fb',
  backgroundSize: 'cover',
  minHeight: '100vh',
  paddingTop: '200px',
  textAlign: 'center'
});

const Header = styled('h1')({
  display: 'flex',
  justifyContent: 'center',
  marginBottom: '26px'
});

const StyledLink = styled('button')({
  fontSize: '20px',
  padding: '6px 48px',
  border: '2px solid transparent',
  borderRadius: '20px',
  backgroundColor: '#E1B8A8',
});

export { Box, Header, StyledLink }