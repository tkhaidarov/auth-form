import * as React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Checkbox,
  TableSortLabel,
  CircularProgress,
  Typography,
} from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { useMemo, useState } from 'react';
import { useGetUsersQuery } from '../../services/usersAPI';
import { formatDistanceToNow } from 'date-fns';
import { enUS } from 'date-fns/locale';
import ToolField from '../Toolfield/ToolField';
type Order = 'asc' | 'desc';

export default function UserTable() {
  const [order, setOrder] = useState<Order>('asc');
  const [selectedUsers, setSelectedUsers] = React.useState<string[]>([]);
  const { data: users = [], isLoading, error } = useGetUsersQuery();
  const handleRequestSort = () => {
    setOrder(order === 'asc' ? 'desc' : 'asc');
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (users) {
      setSelectedUsers(event.target.checked ? users.map(user => user.id) : []);
    }
  };

  const handleClick = (id: string) => {
    setSelectedUsers(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id],
    );
  };

  const searchEmail = useSelector((state: RootState) => state.search.searchEmail);
  const filteredAndSortedRows = useMemo(() => {
    if (!users) return [];
    return [...users]
      .filter(user => user.email.toLowerCase().includes(searchEmail.toLowerCase()))
      .sort((a, b) =>
        order === 'asc'
          ? new Date(a.last_seen).getTime() - new Date(b.last_seen).getTime()
          : new Date(b.last_seen).getTime() - new Date(a.last_seen).getTime(),
      );
  }, [users, searchEmail, order]);

  return (
    <>
      <ToolField selectedUsers={selectedUsers} />
      <TableContainer component={Paper}>
        {isLoading && <CircularProgress sx={{ display: 'block', margin: '20px auto' }} />}
        {error && (
          <Typography
            color="error"
            sx={{ textAlign: 'center', fontSize: '1.5rem', margin: '20px' }}
          >
            Error loading users
          </Typography>
        )}

        {!isLoading && !error && (
          <Table sx={{ minWidth: 650 }} aria-label="user table">
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    color="primary"
                    indeterminate={selectedUsers.length > 0 && selectedUsers.length < users.length}
                    checked={selectedUsers.length === users.length}
                    onChange={handleSelectAllClick}
                    sx={{ transform: 'scale(1.2)' }}
                  />
                </TableCell>
                <TableCell sx={{ fontSize: '1.5rem' }}>Name</TableCell>
                <TableCell sx={{ fontSize: '1.5rem' }}>Email</TableCell>
                <TableCell sx={{ fontSize: '1.5rem' }}>Status</TableCell>
                <TableCell sx={{ fontSize: '1.5rem' }}>
                  Last Seen
                  <TableSortLabel
                    active
                    direction={order}
                    onClick={handleRequestSort}
                    sx={{ fontSize: '1.5rem' }}
                  ></TableSortLabel>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredAndSortedRows?.map(user => (
                <TableRow
                  key={user.id}
                  onClick={() => handleClick(user.id)}
                  selected={selectedUsers.includes(user.id)}
                  sx={{ cursor: 'pointer' }}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      color="primary"
                      checked={selectedUsers.includes(user.id)}
                      sx={{ transform: 'scale(1.2)' }}
                    />
                  </TableCell>
                  <TableCell sx={{ fontSize: '1.4rem' }}>{user.name}</TableCell>
                  <TableCell sx={{ fontSize: '1.4rem' }}>{user.email}</TableCell>
                  <TableCell sx={{ fontSize: '1.4rem' }}>
                    {user.is_blocked ? 'blocked' : 'active'}
                  </TableCell>
                  <TableCell sx={{ fontSize: '1.4rem' }}>
                    {formatDistanceToNow(new Date(user.last_seen), {
                      addSuffix: true,
                      locale: enUS,
                    })}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </TableContainer>
    </>
  );
}
