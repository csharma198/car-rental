import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import type { LoginCredentials } from '../../types/auth';

const ADMIN_CREDENTIALS = {
  email: 'admin@example.com',
  password: 'admin123'
};

export default function LoginPage() {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState<LoginCredentials>({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.email === ADMIN_CREDENTIALS.email && 
        credentials.password === ADMIN_CREDENTIALS.password) {
      localStorage.setItem('isAuthenticated', 'true');
      navigate('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-400 via-purple-300 to-pink-200">
      <div className="max-w-md w-full mx-4">
        <div className="bg-white/30 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden">
          <div className="px-8 pt-8">
            <div className="text-center">
              <div className="inline-block p-4 rounded-full bg-white/50 backdrop-blur-xl shadow-xl">
                <img
                  className="h-12 w-auto"
                  src="https://res.cloudinary.com/demo/image/upload/ar_1.0,c_thumb,g_face,w_0.6,z_0.7/r_max/co_black,e_outline/co_dimgrey,e_shadow,x_30,y_40/actor.png"
                  alt="Your Company"
                />
              </div>
              <h2 className="mt-6 text-3xl font-extrabold text-gray-900 drop-shadow-sm">
                Welcome Back
              </h2>
              <p className="mt-2 text-sm text-gray-600 bg-white/50 rounded-full px-3 py-1 inline-block">
                Sign in to your account
              </p>
            </div>
          </div>

          <div className="px-8 py-8">
            <form className="space-y-6" onSubmit={handleSubmit}>
              {error && (
                <div className="rounded-lg bg-red-50 p-4 backdrop-blur-xl">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-red-800">{error}</p>
                    </div>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email address
                  </label>
                  <div className="mt-1">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={credentials.email}
                      onChange={(e) => setCredentials(prev => ({ ...prev, email: e.target.value }))}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm 
                               placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 
                               bg-white/50 backdrop-blur-xl"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <div className="mt-1">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      value={credentials.password}
                      onChange={(e) => setCredentials(prev => ({ ...prev, password: e.target.value }))}
                      className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm 
                               placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 
                               bg-white/50 backdrop-blur-xl"
                      placeholder="Enter your password"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm 
                           text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 
                           hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 
                           focus:ring-offset-2 focus:ring-indigo-500 transform transition-all duration-150 
                           hover:scale-[1.02]"
                >
                  Sign in
                </button>
              </div>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white/50 text-gray-500 rounded-full">
                    Demo credentials
                  </span>
                </div>
              </div>

              <div className="mt-4 text-center text-sm text-gray-600">
                <p>Email: admin@example.com</p>
                <p>Password: admin123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}