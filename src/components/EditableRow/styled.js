import TableRow from '@mui/material/TableRow';
import styled from 'styled-components';

const StyledTableRow = styled(TableRow)({
  display: 'flex',
  justifyContent: 'center',
});

const StyledInput = styled('input')({
  maxWidth: '160px',
  width: '100%',
  padding: '14px 0px',
  margin: '10px -10px 10px 14px',
});

const Button = styled('button')({
  padding: '5px 8px',
  letterSpacing: '0.8px',
  borderColor: '#1976D2',
  backgroundColor: 'transparent'
});

const ButtonLeft = styled('button')({
  margin: '0 30px 0 50px',
  padding: '5px 16px',
  letterSpacing: '0.8px',
  borderColor: '#1976D2',
  backgroundColor: 'transparent'
});

export { StyledInput, Button, ButtonLeft, StyledTableRow };