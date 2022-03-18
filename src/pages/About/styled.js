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

export { Box, Header }