import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useForm } from 'react-hook-form';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import classes from './Form.module.scss';
import InputField from '../../UI/InputField/InputField';
import SignInUpButton from '../../UI/SignInUpButton/SignInUpButton';
import { useLoginMutation, useRegisterMutation } from '../../services/authAPI';
import { useDispatch, useSelector } from 'react-redux';
import { setCredentials } from '../../slices/authSlice';
import { useNavigate } from 'react-router-dom';
import { setErrorCredentials } from '../../slices/errorSlice';
import { Snackbar, Alert } from '@mui/material';
import { useEffect, useState } from 'react';
const Form = ({ isLogin }) => {
    const dispatch = useDispatch();
    const formState = useSelector((state) => state.form);
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(null);
    const { handleSubmit, control, reset } = useForm({
        defaultValues: formState,
    });
    useEffect(() => {
        reset(formState);
    }, [isLogin, formState, reset]);
    const [login] = useLoginMutation();
    const [register] = useRegisterMutation();
    const onSubmit = async (data) => {
        try {
            const response = isLogin
                ? await login({ email: data.email, password: data.password }).unwrap()
                : await register({ name: data.name, email: data.email, password: data.password }).unwrap();
            dispatch(setCredentials(response));
            dispatch(setErrorCredentials(response));
            navigate('/editing-panel');
        }
        catch (error) {
            console.error('Error', error);
            setErrorMessage(error?.data?.message);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsxs("form", { className: classes.authForm, onSubmit: handleSubmit(onSubmit), children: [!isLogin && (_jsx(InputField, { control: control, name: "name", label: "Name*", rules: { required: 'Name is required' }, icon: _jsx(PersonAddAltOutlinedIcon, { sx: { fontSize: '2rem' } }) })), _jsx(InputField, { control: control, name: "email", label: "Email*", rules: {
                            required: 'Email is required',
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                message: 'Enter a valid email address',
                            },
                        }, icon: _jsx(EmailOutlinedIcon, { sx: { fontSize: '2rem' } }) }), _jsx(InputField, { control: control, name: "password", label: "Password*", rules: {
                            required: 'Password is required',
                            minLength: { value: 6, message: 'Password must be at least 6 characters' },
                        } }), _jsx(SignInUpButton, { children: isLogin ? 'Sign in' : 'Sign up' })] }), _jsx(Snackbar, { open: !!errorMessage, autoHideDuration: 3000, onClose: () => setErrorMessage(null), anchorOrigin: { vertical: 'top', horizontal: 'center' }, children: _jsx(Alert, { onClose: () => setErrorMessage(null), severity: "error", sx: { width: '100%', fontSize: '1.5rem' }, children: errorMessage }) })] }));
};
export default Form;
