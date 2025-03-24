import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, TableSortLabel, CircularProgress, Typography, } from '@mui/material';
import { useSelector } from 'react-redux';
import { useMemo, useState } from 'react';
import { useGetUsersQuery } from '../../services/usersAPI';
import { formatDistanceToNow } from 'date-fns';
import { enUS } from 'date-fns/locale';
import ToolField from '../Toolfield/ToolField';
export default function UserTable() {
    const [order, setOrder] = useState('asc');
    const [selectedUsers, setSelectedUsers] = React.useState([]);
    const { data: users = [], isLoading, error } = useGetUsersQuery();
    const handleRequestSort = () => {
        setOrder(order === 'asc' ? 'desc' : 'asc');
    };
    const handleSelectAllClick = (event) => {
        if (users) {
            setSelectedUsers(event.target.checked ? users.map(user => user.id) : []);
        }
    };
    const handleClick = (id) => {
        setSelectedUsers(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
    };
    const searchEmail = useSelector((state) => state.search.searchEmail);
    const filteredAndSortedRows = useMemo(() => {
        if (!users)
            return [];
        return [...users]
            .filter(user => user.email.toLowerCase().includes(searchEmail.toLowerCase()))
            .sort((a, b) => order === 'asc'
            ? new Date(a.last_seen).getTime() - new Date(b.last_seen).getTime()
            : new Date(b.last_seen).getTime() - new Date(a.last_seen).getTime());
    }, [users, searchEmail, order]);
    return (_jsxs(_Fragment, { children: [_jsx(ToolField, { selectedUsers: selectedUsers }), _jsxs(TableContainer, { component: Paper, children: [isLoading && _jsx(CircularProgress, { sx: { display: 'block', margin: '20px auto' } }), error && (_jsx(Typography, { color: "error", sx: { textAlign: 'center', fontSize: '1.5rem', margin: '20px' }, children: "Error loading users" })), !isLoading && !error && (_jsxs(Table, { sx: { minWidth: 650 }, "aria-label": "user table", children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { padding: "checkbox", children: _jsx(Checkbox, { color: "primary", indeterminate: selectedUsers.length > 0 && selectedUsers.length < users.length, checked: selectedUsers.length === users.length, onChange: handleSelectAllClick, sx: { transform: 'scale(1.2)' } }) }), _jsx(TableCell, { sx: { fontSize: '1.5rem' }, children: "Name" }), _jsx(TableCell, { sx: { fontSize: '1.5rem' }, children: "Email" }), _jsx(TableCell, { sx: { fontSize: '1.5rem' }, children: "Status" }), _jsxs(TableCell, { sx: { fontSize: '1.5rem' }, children: ["Last Seen", _jsx(TableSortLabel, { active: true, direction: order, onClick: handleRequestSort, sx: { fontSize: '1.5rem' } })] })] }) }), _jsx(TableBody, { children: filteredAndSortedRows?.map(user => (_jsxs(TableRow, { onClick: () => handleClick(user.id), selected: selectedUsers.includes(user.id), sx: { cursor: 'pointer' }, children: [_jsx(TableCell, { padding: "checkbox", children: _jsx(Checkbox, { color: "primary", checked: selectedUsers.includes(user.id), sx: { transform: 'scale(1.2)' } }) }), _jsx(TableCell, { sx: { fontSize: '1.4rem' }, children: user.name }), _jsx(TableCell, { sx: { fontSize: '1.4rem' }, children: user.email }), _jsx(TableCell, { sx: { fontSize: '1.4rem' }, children: user.is_blocked ? 'blocked' : 'active' }), _jsx(TableCell, { sx: { fontSize: '1.4rem' }, children: formatDistanceToNow(new Date(user.last_seen), {
                                                addSuffix: true,
                                                locale: enUS,
                                            }) })] }, user.id))) })] }))] })] }));
}
