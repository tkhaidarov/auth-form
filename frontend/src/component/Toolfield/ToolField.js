import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, TextField, Toolbar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchEmail } from '../../slices/searchSlice';
import classes from './ToolField.module.scss';
import { useBlockUserMutation, useUnBlockUserMutation, useDeleteUserMutation, } from '../../services/usersAPI';
const ToolField = ({ selectedUsers }) => {
    const dispatch = useDispatch();
    const searchEmail = useSelector((state) => state.search.searchEmail);
    const [blockUser] = useBlockUserMutation();
    const [unblockUser] = useUnBlockUserMutation();
    const [deleteUser] = useDeleteUserMutation();
    const handleSearchChange = (e) => {
        dispatch(setSearchEmail(e.target.value));
    };
    const handleBlockUser = async () => {
        await Promise.all(selectedUsers.map(id => blockUser(id)));
    };
    const handleUnBlockUser = async () => {
        await Promise.all(selectedUsers.map(id => unblockUser(id)));
    };
    const handleDeleteUser = async () => {
        await Promise.all(selectedUsers.map(id => deleteUser(id)));
    };
    return (_jsxs(Toolbar, { sx: {
            flexGrow: 1,
            gap: '1.5rem',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        }, children: [_jsx(Button, { variant: "outlined", sx: { fontSize: '1.4rem', height: '3.5rem' }, startIcon: _jsx(LockOutlinedIcon, {}), onClick: handleBlockUser, disabled: selectedUsers.length === 0, children: "Block" }), _jsx(Button, { variant: "outlined", sx: { height: '3.5rem' }, onClick: handleUnBlockUser, disabled: selectedUsers.length === 0, children: _jsx(LockOpenIcon, { sx: { fontSize: '2rem' } }) }), _jsx(Button, { variant: "outlined", sx: { borderColor: 'red', height: '3.5rem', mr: '2rem' }, onClick: handleDeleteUser, disabled: selectedUsers.length === 0, children: _jsx(DeleteOutlineIcon, { sx: { color: 'red', fontSize: '2rem' } }) }), _jsx("div", { className: classes.searchContainer, children: _jsx(TextField, { id: "outlined-basic", label: "search", variant: "outlined", value: searchEmail, onChange: handleSearchChange, size: "small", fullWidth: true, sx: {
                        '& .MuiOutlinedInput-root': {
                            fontSize: '1.4rem', // Уменьшает шрифт
                            padding: '0 8px', // Регулирует высоту
                        },
                        '& .MuiInputLabel-root': {
                            fontSize: '1.2rem', // Уменьшает размер текста label
                        },
                    } }) })] }));
};
export default ToolField;
