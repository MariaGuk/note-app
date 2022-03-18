import { makeStyles } from "@material-ui/core/styles";
import styled from 'styled-components'

const StyledBox = styled('div')({
  backgroundColor: '#6c57af'
});

const useStyles = makeStyles({
  navigation: {
    display: 'flex',
    flexDirection: 'row',
    margin: '0 auto',
  },
  link: {
    color: '#ffffff',
    textDecoration: 'none',
    marginRight: '50px',
    fontSize: '15px',
    fontFamily: 'sans-serif',
    textTransform: 'uppercase',
  },
});

export { StyledBox, useStyles };