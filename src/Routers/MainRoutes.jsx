import { Routes, Route } from 'react-router-dom';
import Error from './Error';
import BaseRoutes from './BaseRoutes';
import Routing from './Routing';
import AuthRoute from './AuthRoutes';

export default function App() {
  return (
    <Routes>
      {/* Public routes */}
      <Route path="/*" element={<BaseRoutes/>} />

      {/* Auth routes */}
      <Route path="/auth/*" element={<AuthRoute/>} />

      {/* Private routes */}
      <Route path="/app/*" element={<Routing />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}
