import { useForm, SubmitHandler } from 'react-hook-form';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import { IRegisterRequest } from '../../types/types';
import classes from './Form.module.scss';
import InputField from '../../UI/InputField/InputField';
import SignInUpButton from '../../UI/SignInUpButton/SignInUpButton';
import { useLoginMutation, useRegisterMutation } from '../../services/authAPI';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { setErrorCredentials } from '../../slices/errorSlice';
import { RootState } from '../../store/store';
import { Snackbar, Alert } from '@mui/material';
import { useEffect, useState } from 'react';

interface IForm {
  isLogin: boolean;
}
const Form = ({ isLogin }: IForm) => {
  const dispatch = useDispatch();
  const formState = useSelector((state: RootState) => state.form);
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const { handleSubmit, control, reset } = useForm<IRegisterRequest>({
    defaultValues: formState,
  });
  useEffect(() => {
    reset(formState);
  }, [isLogin, formState, reset]);

  const [login] = useLoginMutation();
  const [register] = useRegisterMutation();
  const onSubmit: SubmitHandler<IRegisterRequest> = async data => {
    try {
      const response = isLogin
        ? await login({ email: data.email, password: data.password }).unwrap()
        : await register({ name: data.name, email: data.email, password: data.password }).unwrap();
      dispatch(setCredentials(response));
      dispatch(setErrorCredentials(response));
      navigate('/editing-panel');
    } catch (error: any) {
      console.error('Error', error);
      setErrorMessage(error?.data?.message);
    }
  };

  return (
    <>
      <form className={classes.authForm} onSubmit={handleSubmit(onSubmit)}>
        {!isLogin && (
          <InputField
            control={control}
            name="name"
            label="Name*"
            rules={{ required: 'Name is required' }}
            icon={<PersonAddAltOutlinedIcon sx={{ fontSize: '2rem' }} />}
          />
        )}

        <InputField
          control={control}
          name="email"
          label="Email*"
          rules={{
            required: 'Email is required',
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: 'Enter a valid email address',
            },
          }}
          icon={<EmailOutlinedIcon sx={{ fontSize: '2rem' }} />}
        />
        <InputField
          control={control}
          name="password"
          label="Password*"
          rules={{
            required: 'Password is required',
            minLength: { value: 6, message: 'Password must be at least 6 characters' },
          }}
        />
        <SignInUpButton>{isLogin ? 'Sign in' : 'Sign up'}</SignInUpButton>
      </form>
      <Snackbar
        open={!!errorMessage}
        autoHideDuration={3000}
        onClose={() => setErrorMessage(null)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setErrorMessage(null)}
          severity="error"
          sx={{ width: '100%', fontSize: '1.5rem' }}
        >
          {errorMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Form;
