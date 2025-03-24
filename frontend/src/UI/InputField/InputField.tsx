import React, { useState } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';

interface IInputFieldProps {
  control: any;
  name: string;
  label: string;
  icon?: React.ReactNode;
  rules?: object;
}

const InputField: React.FC<IInputFieldProps> = ({ control, icon, name, label, rules }) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(prev => !prev);
  const isPassword = name === 'password';
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const passwordIcon = isPassword ? (
    <IconButton
      onClick={handleClickShowPassword}
      onMouseDown={handleMouseDownPassword}
      sx={{ p: 0 }}
    >
      {showPassword ? (
        <Visibility sx={{ fontSize: '2rem' }} />
      ) : (
        <VisibilityOff sx={{ fontSize: '2rem' }} />
      )}
    </IconButton>
  ) : (
    icon
  );
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          label={label}
          variant="standard"
          fullWidth
          type={isPassword && !showPassword ? 'password' : 'text'}
          error={!!error}
          helperText={error ? error.message : ''}
          onChange={e => field.onChange(e)}
          value={field.value || ''}
          sx={{ height: '6rem' }}
          slotProps={{
            inputLabel: { sx: { fontSize: '1.4rem' } },
            formHelperText: { sx: { fontSize: '1.2rem' } },
            input: {
              sx: { fontSize: '1.6rem' },
              endAdornment: <InputAdornment position="end">{passwordIcon}</InputAdornment>,
            },
          }}
        />
      )}
    />
  );
};

export default InputField;
