import React from 'react';
interface IActionsWithAccount {
    isLogin: boolean;
    toggleForm: () => void;
}
declare const ActionsWithAccount: React.FC<IActionsWithAccount>;
export default ActionsWithAccount;
