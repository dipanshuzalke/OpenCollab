import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import HomePage from './components/HomePage';
import AdminDashboard from './components/admin/AdminDashboard';
import UserDashboard from './components/dashboard/UserDashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';
import AdminDashboardPage from './components/dashboard/AdminDashboardPage';
import RoleSelection from './components/auth/RoleSelection'
import Logout from './components/auth/Logout';
import LandingPage from './components/LandingPage';
import CommunityPage from './components/Communitypage.jsx'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<RoleSelection />} />
        <Route path="register/:role" element={<Signup />} />
        <Route path="logout" element={<Logout />} />
        <Route path="/community-chat/" element={<CommunityPage />} />

        <Route 
          path="/admin/users" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/admin/dashboard" 
          element={
            <ProtectedRoute>
              <AdminDashboardPage />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </Router>
  )
}

export default App
