import { Typography } from '@mui/material';
import React from 'react';

interface ITitleOfForm {
  children?: React.ReactNode;
}

const TitleOfForm: React.FC<ITitleOfForm> = ({ children }) => {
  return (
    <Typography variant="h4" sx={{ mt: 1, textAlign: 'center' }}>
      {children}
    </Typography>
  );
};

export default TitleOfForm;
