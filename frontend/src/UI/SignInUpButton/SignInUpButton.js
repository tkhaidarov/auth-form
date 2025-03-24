import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Button } from '@mui/material';
const SignInUpButton = ({ children }) => {
    return (_jsx(_Fragment, { children: _jsx(Button
        // onClick={reset}
        , { 
            // onClick={reset}
            type: "submit", variant: "contained", sx: { fontSize: '1.6rem', letterSpacing: '0.1rem', textTransform: 'none', mt: '1rem' }, children: children }) }));
};
export default SignInUpButton;
