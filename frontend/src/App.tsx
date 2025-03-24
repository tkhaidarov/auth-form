import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginPage from './pages/LoginPage/LoginPage';
import EditingPanel from './pages/EditingPanel/EditingPanel';
import { RootState } from './store/store';
import { JSX } from 'react';

function ProtectedRoute({ children }: { children: JSX.Element }) {
  const token = useSelector((state: RootState) => state.auth.token);
  return token ? children : <Navigate to="/" />;
}
function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/editing-panel"
        element={
          <ProtectedRoute>
            <EditingPanel />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
