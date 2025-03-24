import { jsx as _jsx } from "react/jsx-runtime";
import Stack from '@mui/material/Stack';
import UserTable from '../../component/VirtualTable/UserTable';
const EditingPanel = () => {
    return (_jsx(Stack, { spacing: 2, sx: { maxWidth: '80rem', mx: 'auto', mt: '5rem' }, children: _jsx(UserTable, {}) }));
};
export default EditingPanel;
