import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import HomePage from './components/HomePage'
import AdminDashboard from './components/admin/AdminDashboard'
import UserDashboard from './components/dashboard/UserDashboard'
import ProtectedRoute from './components/auth/ProtectedRoute'
import AdminDashboardPage from './components/dashboard/AdminDashboardPage'
import RoleSelection from './components/auth/RoleSelection'
import Logout from './components/auth/Logout'
import LandingPage from './components/LandingPage'
import CommunityPage from './components/Communitypage.jsx'
import EventPage from './components/pages/EventPage.jsx'
import AppLayout from './components/layout/AppLayout.jsx'
import Auth from './components/auth/Auth.jsx'

function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <LandingPage />
    },
    {
      path: 'auth',
      element: <Auth />
    },
    {
      path: 'register/:role',
      element: <Signup />
    },
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: 'home',
          element: <HomePage />
        },
        {
          path: 'logout',
          element: <Logout />
        },
        {
          path: 'community-chat/',
          element: <CommunityPage />
        },
        {
          path: 'events',
          element: <EventPage />
        },
        {
          path: 'admin/dashboard',
          element: (
            <ProtectedRoute>
              <AdminDashboardPage />
            </ProtectedRoute>
          )
        }
      ]
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
