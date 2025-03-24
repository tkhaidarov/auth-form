import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classes from './AuthForm.module.scss';
import TitleOfForm from '../../UI/TitleOfForm/TitleOfForm';
import Form from '../FormFields/Form';
import ActionsWithAccount from '../ActionsWithAccount/ActionsWithAccount';
import { useState } from 'react';
const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(false);
    const toggleForm = () => setIsLogin(prev => !prev);
    return (_jsxs("div", { className: classes.authContainer, children: [_jsx(TitleOfForm, { children: isLogin ? 'Login to your account' : 'Create an account' }), _jsx(Form, { isLogin: isLogin }), _jsx(ActionsWithAccount, { isLogin: isLogin, toggleForm: toggleForm })] }));
};
export default AuthForm;
