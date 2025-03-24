import Stack from '@mui/material/Stack';
import UserTable from '../../component/VirtualTable/UserTable';

const EditingPanel = () => {
  return (
    <Stack spacing={2} sx={{ maxWidth: '80rem', mx: 'auto', mt: '5rem' }}>
      <UserTable />
    </Stack>
  );
};

export default EditingPanel;
