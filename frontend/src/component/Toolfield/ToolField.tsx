import { Button, TextField, Toolbar } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
// import SearchIcon from '@mui/icons-material/Search';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchEmail } from '../../slices/searchSlice';
import { RootState } from '../../store/store';
import { ISelectedUsers } from '../../types/types';
import classes from './ToolField.module.scss';
import React from 'react';
import {
  useBlockUserMutation,
  useUnBlockUserMutation,
  useDeleteUserMutation,
} from '../../services/usersAPI';

const ToolField: React.FC<ISelectedUsers> = ({ selectedUsers }) => {
  const dispatch = useDispatch();
  const searchEmail = useSelector((state: RootState) => state.search.searchEmail);
  const [blockUser] = useBlockUserMutation();
  const [unblockUser] = useUnBlockUserMutation();
  const [deleteUser] = useDeleteUserMutation();
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
  return (
    <Toolbar
      sx={{
        flexGrow: 1,
        gap: '1.5rem',
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
      }}
    >
      <Button
        variant="outlined"
        sx={{ fontSize: '1.4rem', height: '3.5rem' }}
        startIcon={<LockOutlinedIcon />}
        onClick={handleBlockUser}
        disabled={selectedUsers.length === 0}
      >
        Block
      </Button>
      <Button
        variant="outlined"
        sx={{ height: '3.5rem' }}
        onClick={handleUnBlockUser}
        disabled={selectedUsers.length === 0}
      >
        <LockOpenIcon sx={{ fontSize: '2rem' }} />
      </Button>
      <Button
        variant="outlined"
        sx={{ borderColor: 'red', height: '3.5rem', mr: '2rem' }}
        onClick={handleDeleteUser}
        disabled={selectedUsers.length === 0}
      >
        <DeleteOutlineIcon sx={{ color: 'red', fontSize: '2rem' }} />
      </Button>
      <div className={classes.searchContainer}>
        <TextField
          id="outlined-basic"
          label="search"
          variant="outlined"
          value={searchEmail}
          onChange={handleSearchChange}
          size="small"
          fullWidth
          sx={{
            '& .MuiOutlinedInput-root': {
              fontSize: '1.4rem', // Уменьшает шрифт
              padding: '0 8px', // Регулирует высоту
            },
            '& .MuiInputLabel-root': {
              fontSize: '1.2rem', // Уменьшает размер текста label
            },
          }}
        />
      </div>
    </Toolbar>
  );
};

export default ToolField;
