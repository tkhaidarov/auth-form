import classes from './AuthForm.module.scss';
import TitleOfForm from '../../UI/TitleOfForm/TitleOfForm';
import Form from '../FormFields/Form';
import ActionsWithAccount from '../ActionsWithAccount/ActionsWithAccount';
import { useState } from 'react';

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const toggleForm = () => setIsLogin(prev => !prev);
  return (
    <div className={classes.authContainer}>
      <TitleOfForm>{isLogin ? 'Login to your account' : 'Create an account'}</TitleOfForm>
      <Form isLogin={isLogin} />
      <ActionsWithAccount isLogin={isLogin} toggleForm={toggleForm} />
    </div>
  );
};

export default AuthForm;
