import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { resetFormState } from '../../slices/formStateSlice';
const ActionsWithAccount = ({ isLogin, toggleForm }) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(resetFormState());
        toggleForm();
    };
    return (_jsxs(Typography, { variant: "body2", component: "p", sx: { fontSize: '1.5rem' }, children: [isLogin ? "Don't have an account?" : 'Already have an account?', _jsx(Button, { onClick: handleClick, sx: { fontSize: 14, textTransform: 'none' }, children: isLogin ? 'Sign up' : 'Sign in' })] }));
};
export default ActionsWithAccount;
