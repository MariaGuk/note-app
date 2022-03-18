import styled from 'styled-components';

const Box = styled('div')({
  backgroundColor: '#c7b7fb',
  backgroundSize: 'cover',
  minHeight: '100vh',
  paddingTop: '100px',
});

const Header = styled('h1')({
  display: 'flex',
  justifyContent: 'center',
});
const Description = styled('p')({
  fontSize: '20px',
  letterSpacing: '0.3px',
  margin: '30px 220px',
});

export { Box, Header,Description }