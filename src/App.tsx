import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import CarForm from './components/CarForm';
import CarList from './components/CarList';
import DriverList from './components/DriverList';
import DriverForm from './components/DriverForm';
import UserList from './components/Users/UserList';
import UserForm from './components/Users/UserForm';
import LoginPage from './components/Auth/LoginPage';
import Dashboard from './components/Dashboard/Dashboard';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import Header from './components/Layout/Header';
import Sidebar from './components/Layout/Sidebar';
import './App.css';

function App() {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (!isAuthenticated) {
    return (
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    );
  }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-gray-100 to-indigo-50">
        <div className="flex h-screen overflow-hidden">
          <div className="hidden md:flex md:flex-shrink-0">
            <div className="flex w-64 flex-col">
              <Sidebar />
            </div>
          </div>
          <div className="flex flex-col flex-1 overflow-hidden">
            <Header />
            <div className="flex-1 overflow-auto">
              <div className="py-6">
                <Routes>
                  <Route path="/" element={<Navigate to="/dashboard" replace />} />
                  <Route path="/dashboard" element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  } />
                  <Route path="/users" element={
                    <ProtectedRoute>
                      <UserList />
                    </ProtectedRoute>
                  } />
                  <Route path="/users/add" element={
                    <ProtectedRoute>
                      <>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                            Add New User
                          </h1>
                        </div>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                          <div className="py-4">
                            <div className="glass-card rounded-2xl">
                              <UserForm />
                            </div>
                          </div>
                        </div>
                      </>
                    </ProtectedRoute>
                  } />
                  <Route path="/cars" element={
                    <ProtectedRoute>
                      <CarList />
                    </ProtectedRoute>
                  } />
                  <Route path="/cars/add" element={
                    <ProtectedRoute>
                      <>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                            Add New Car
                          </h1>
                        </div>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                          <div className="py-4">
                            <div className="glass-card rounded-2xl">
                              <CarForm />
                            </div>
                          </div>
                        </div>
                      </>
                    </ProtectedRoute>
                  } />
                  <Route path="/drivers" element={
                    <ProtectedRoute>
                      <DriverList />
                    </ProtectedRoute>
                  } />
                  <Route path="/drivers/add" element={
                    <ProtectedRoute>
                      <>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                            Add New Driver
                          </h1>
                        </div>
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
                          <div className="py-4">
                            <div className="glass-card rounded-2xl">
                              <DriverForm />
                            </div>
                          </div>
                        </div>
                      </>
                    </ProtectedRoute>
                  } />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;