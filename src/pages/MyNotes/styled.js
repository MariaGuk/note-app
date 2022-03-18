import styled from 'styled-components';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

const HeadersStyled = styled('th')({
  fontWeight: 'bold',
  fontFamily: 'sans-serif ',
  fontSize: '17px',
  letterSpacing: '0.6px',
  padding: '17px',
  alignItems: 'center',
  cursor: 'pointer',
});

const Container = styled('div')({
  padding: '50px 60px',
  backgroundColor: '#c7b7fb',
  overflowX: 'hidden',
  position: 'relative',
  minHeight: ' 100vh',
  margin: '0 auto',
  backgroundRepeat: 'no - repeat',
  backgroundSize: ' cover',
  backgroundPosition: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const AlertReplacer = styled('div')({
  height: '45px',
  marginBottom: '40px',
});

const StyledTable = styled(Table)({
  minWidth: '500px',
  position: 'relative',
  borderCollapse: 'collapse',
  padding: '10px',
});

const StyledTableContainer = styled(TableContainer)({
  overflowX: 'hidden',
  width: '100%',
  maxWidth: 1000,
  maxHeight: 470,
});

const StyledHeader = styled('h1')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  color: 'rgb(89, 52, 100)',
  marginBottom: '20px',
  letterSpacing: '0.7px'
});

const RowHeaders = styled(TableRow)({
  textAlign: "center",
  borderBottom: '1px solid #6b577adf',
  position: 'sticky',
  top: '0',
  zIndex: '2',
  height: '66px',
  backgroundColor: '#9e8cb6',
  padding: '0px'
});

const Description = styled(TableCell)({
  display: 'block',
  maxWidth: '68.8px',
  overflow: 'hidden',
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  cursor: 'pointer',
});

const StyledTableRow = styled(TableRow)({
  cursor: 'pointer',
  backgroundColor: '#ffffff',
});

const StyledTableRowSelected = styled(TableRow)({
  backgroundColor: '#cdbffdb7'
});

export { HeadersStyled, Container, AlertReplacer, StyledTable, StyledTableContainer, StyledHeader, RowHeaders, Description, StyledTableRow, StyledTableRowSelected }