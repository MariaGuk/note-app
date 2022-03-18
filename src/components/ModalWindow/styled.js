import Box from '@mui/material/Box';
import styled from 'styled-components';

const StyledBox = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  maxWidth: '100%',
  backgroundColor: 'white',
  border: '2px solid #222020',
  boxShadow: 30,
  padding: '40px',
  overflow: 'hidden',
});

const HeaderContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
});

const Description = styled('p')({
  marginTop: '20px',
  letterSpacing: '0.4px',
  lineHeight: '26px'
});

const StyledDate = styled('p')({
  margin: '30px 0px 30px 500px'
});

const StyledCloseButton = styled('button')({
  marginLeft: '250px',
  padding: '7px 34px',
  backgroundColor: 'transparent',
  borderRadius: '4px',
});

export { StyledBox, StyledCloseButton, StyledDate, Description, HeaderContainer };