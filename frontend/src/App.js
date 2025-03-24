import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginPage from './pages/LoginPage/LoginPage';
import EditingPanel from './pages/EditingPanel/EditingPanel';
function ProtectedRoute({ children }) {
    const token = useSelector((state) => state.auth.token);
    return token ? children : _jsx(Navigate, { to: "/" });
}
function App() {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: "/", element: _jsx(LoginPage, {}) }), _jsx(Route, { path: "/editing-panel", element: _jsx(ProtectedRoute, { children: _jsx(EditingPanel, {}) }) })] }));
}
export default App;
