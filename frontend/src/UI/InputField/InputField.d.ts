import React from 'react';
interface IInputFieldProps {
    control: any;
    name: string;
    label: string;
    icon?: React.ReactNode;
    rules?: object;
}
declare const InputField: React.FC<IInputFieldProps>;
export default InputField;
