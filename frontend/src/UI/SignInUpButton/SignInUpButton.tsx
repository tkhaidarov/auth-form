import { Button } from '@mui/material';
import React from 'react';

interface ISignInUpButton {
  children?: React.ReactNode;
}

const SignInUpButton: React.FC<ISignInUpButton> = ({ children }) => {
  return (
    <>
      <Button
        // onClick={reset}
        type="submit"
        variant="contained"
        sx={{ fontSize: '1.6rem', letterSpacing: '0.1rem', textTransform: 'none', mt: '1rem' }}
      >
        {children}
      </Button>
    </>
  );
};

export default SignInUpButton;
