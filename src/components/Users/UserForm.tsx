import { useState } from 'react';
import type { User } from '../../types/user';

export default function UserForm() {
  const [user, setUser] = useState<Partial<User>>({
    preferences: {
      language: 'English',
      currency: 'USD',
      notifications: true,
      newsletter: false,
    },
    verificationStatus: {
      email: false,
      phone: false,
      identity: false,
    },
    wallet: {
      balance: 0,
      currency: 'USD',
      transactions: [],
    },
    bookingHistory: [],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('User data:', user);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-6 p-6">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
          <p className="mt-1 text-sm text-gray-500">Add new user to the platform.</p>
        </div>

        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={user.firstName || ''}
                onChange={(e) => setUser(prev => ({ ...prev, firstName: e.target.value }))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={user.lastName || ''}
                onChange={(e) => setUser(prev => ({ ...prev, lastName: e.target.value }))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                value={user.email || ''}
                onChange={(e) => setUser(prev => ({ ...prev, email: e.target.value }))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone
            </label>
            <div className="mt-1">
              <input
                type="tel"
                name="phone"
                id="phone"
                value={user.phone || ''}
                onChange={(e) => setUser(prev => ({ ...prev, phone: e.target.value }))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">Address</h3>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="street" className="block text-sm font-medium text-gray-700">
                Street Address
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="street"
                  id="street"
                  value={user.address?.street || ''}
                  onChange={(e) => setUser(prev => ({
                    ...prev,
                    address: { ...prev.address!, street: e.target.value }
                  }))}
                  className="block w-full rounded-md border-black-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700">
                City
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="city"
                  id="city"
                  value={user.address?.city || ''}
                  onChange={(e) => setUser(prev => ({
                    ...prev,
                    address: { ...prev.address!, city: e.target.value }
                  }))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="state" className="block text-sm font-medium text-gray-700">
                State
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="state"
                  id="state"
                  value={user.address?.state || ''}
                  onChange={(e) => setUser(prev => ({
                    ...prev,
                    address: { ...prev.address!, state: e.target.value }
                  }))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700">
                ZIP Code
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="zipCode"
                  id="zipCode"
                  value={user.address?.zipCode || ''}
                  onChange={(e) => setUser(prev => ({
                    ...prev,
                    address: { ...prev.address!, zipCode: e.target.value }
                  }))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                Country
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="country"
                  id="country"
                  value={user.address?.country || ''}
                  onChange={(e) => setUser(prev => ({
                    ...prev,
                    address: { ...prev.address!, country: e.target.value }
                  }))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">Preferences</h3>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="language" className="block text-sm font-medium text-gray-700">
                Language
              </label>
              <div className="mt-1">
                <select
                  id="language"
                  name="language"
                  value={user.preferences?.language || 'English'}
                  onChange={(e) => setUser(prev => ({
                    ...prev,
                    preferences: { ...prev.preferences!, language: e.target.value }
                  }))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option>English</option>
                  <option>Spanish</option>
                  <option>French</option>
                  <option>German</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="currency" className="block text-sm font-medium text-gray-700">
                Currency
              </label>
              <div className="mt-1">
                <select
                  id="currency"
                  name="currency"
                  value={user.preferences?.currency || 'USD'}
                  onChange={(e) => setUser(prev => ({
                    ...prev,
                    preferences: { ...prev.preferences!, currency: e.target.value }
                  }))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                  <option>JPY</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <div className="flex items-center">
                <input
                  id="notifications"
                  name="notifications"
                  type="checkbox"
                  checked={user.preferences?.notifications}
                  onChange={(e) => setUser(prev => ({
                    ...prev,
                    preferences: { ...prev.preferences!, notifications: e.target.checked }
                  }))}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="notifications" className="ml-2 block text-sm text-gray-700">
                  Enable Notifications
                </label>
              </div>
            </div>

            <div className="sm:col-span-3">
              <div className="flex items-center">
                <input
                  id="newsletter"
                  name="newsletter"
                  type="checkbox"
                  checked={user.preferences?.newsletter}
                  onChange={(e) => setUser(prev => ({
                    ...prev,
                    preferences: { ...prev.preferences!, newsletter: e.target.checked }
                  }))}
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-700">
                  Subscribe to Newsletter
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-4 bg-gray-50 flex items-center justify-end space-x-3">
        <button
          type="button"
          className="rounded-md bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="neo-button rounded-md py-2 px-4 text-sm font-medium"
        >
          Save User
        </button>
      </div>
    </form>
  );
}