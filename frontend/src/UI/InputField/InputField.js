import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
import { InputAdornment, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import IconButton from '@mui/material/IconButton';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Visibility from '@mui/icons-material/Visibility';
const InputField = ({ control, icon, name, label, rules }) => {
    const [showPassword, setShowPassword] = useState(false);
    const handleClickShowPassword = () => setShowPassword(prev => !prev);
    const isPassword = name === 'password';
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const passwordIcon = isPassword ? (_jsx(IconButton, { onClick: handleClickShowPassword, onMouseDown: handleMouseDownPassword, sx: { p: 0 }, children: showPassword ? (_jsx(Visibility, { sx: { fontSize: '2rem' } })) : (_jsx(VisibilityOff, { sx: { fontSize: '2rem' } })) })) : (icon);
    return (_jsx(Controller, { control: control, name: name, defaultValue: "", rules: rules, render: ({ field, fieldState: { error } }) => (_jsx(TextField, { ...field, label: label, variant: "standard", fullWidth: true, type: isPassword && !showPassword ? 'password' : 'text', error: !!error, helperText: error ? error.message : '', onChange: e => field.onChange(e), value: field.value || '', sx: { height: '6rem' }, slotProps: {
                inputLabel: { sx: { fontSize: '1.4rem' } },
                formHelperText: { sx: { fontSize: '1.2rem' } },
                input: {
                    sx: { fontSize: '1.6rem' },
                    endAdornment: _jsx(InputAdornment, { position: "end", children: passwordIcon }),
                },
            } })) }));
};
export default InputField;
