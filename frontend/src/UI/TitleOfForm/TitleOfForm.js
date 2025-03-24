import { jsx as _jsx } from "react/jsx-runtime";
import { Typography } from '@mui/material';
const TitleOfForm = ({ children }) => {
    return (_jsx(Typography, { variant: "h4", sx: { mt: 1, textAlign: 'center' }, children: children }));
};
export default TitleOfForm;
