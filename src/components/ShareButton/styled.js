import styled from 'styled-components';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Share = styled('span')({
  marginTop: '6px',
  letterSpacing: '1px',
  color: '#1976D2'
});
const StyledMenu = styled(Menu)({
  maxHeight: '170px',
  width: '36ch',
});
const StyledMenuItem = styled(MenuItem)({ fontSize: '13px' })

export { Share, StyledMenu, StyledMenuItem }