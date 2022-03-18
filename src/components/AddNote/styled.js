import styled from 'styled-components';

const StyledTitle = styled('h2')({ marginBottom: '20px' });

const StyledForm = styled('form')({
  marginBottom: '36px',
  display: 'flex',
  flexDirection: 'row',
});

const Button = styled('button')({
  backgroundColor: 'transparent',
  border: '1px solid #9a8fbee6',
  borderRadius: '4px',
  padding: '17px 34px',
  letterSpacing: '1.5px',
  fontSize: '16px',
})

export { StyledTitle, StyledForm, Button }