import { Button, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { resetFormState } from '../../slices/formStateSlice';

interface IActionsWithAccount {
  isLogin: boolean;
  toggleForm: () => void;
}

const ActionsWithAccount: React.FC<IActionsWithAccount> = ({ isLogin, toggleForm }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(resetFormState());
    toggleForm();
  };
  return (
    <Typography variant="body2" component="p" sx={{ fontSize: '1.5rem' }}>
      {isLogin ? "Don't have an account?" : 'Already have an account?'}
      <Button onClick={handleClick} sx={{ fontSize: 14, textTransform: 'none' }}>
        {isLogin ? 'Sign up' : 'Sign in'}
      </Button>
    </Typography>
  );
};

export default ActionsWithAccount;
