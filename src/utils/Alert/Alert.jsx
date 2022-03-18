import React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

const AlertToSelect = () => (
  <Alert severity="info" sx={{ mb: 3, mt: 2, pb: 0, pl: 20, pr: 20 }}>
    <AlertTitle sx={{ fontSize: '13px' }}>
      Info:
      <strong> Select note to display</strong>
    </AlertTitle>
  </Alert>
);
export default AlertToSelect;
