import { Link } from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/24/outline';
import type { User } from '../../types/user';

const dummyUsers: User[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1 234-567-8901',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    address: {
      street: '123 Main St',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'USA',
    },
    wallet: {
      balance: 250.50,
      currency: 'USD',
      transactions: [
        {
          id: 't1',
          date: '2024-02-10',
          amount: 25.00,
          type: 'debit',
          description: 'Ride to Manhattan',
        },
      ],
    },
    bookingHistory: [
      {
        id: 'b1',
        date: '2024-02-10',
        pickup: 'JFK Airport',
        dropoff: 'Manhattan',
        amount: 75.00,
        status: 'completed',
        driverName: 'Michael Chen',
        vehicleDetails: 'Tesla Model 3',
      },
    ],
    preferences: {
      language: 'English',
      currency: 'USD',
      notifications: true,
      newsletter: true,
    },
    verificationStatus: {
      email: true,
      phone: true,
      identity: true,
    },
    createdAt: '2024-01-01',
    lastLogin: '2024-02-10',
  },
  // Add more dummy users...
];

export default function UserList() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
            Users
          </h1>
          <Link
            to="/users/add"
            className="neo-button inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold"
          >
            <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Add User
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <div className="glass-card rounded-xl divide-y divide-gray-200/50">
            <ul role="list" className="divide-y divide-gray-200/50">
              {dummyUsers.map((user) => (
                <li key={user.id} className="hover:bg-white/40 transition-colors duration-200">
                  <div className="flex items-center px-6 py-5">
                    <div className="flex min-w-0 flex-1 items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-16 w-16 rounded-full object-cover shadow-lg"
                          src={user.avatar}
                          alt={`${user.firstName} ${user.lastName}`}
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-6">
                        <div>
                          <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                            {user.firstName} {user.lastName}
                          </p>
                          <div className="mt-1 flex flex-wrap items-center gap-x-4 text-sm text-gray-600">
                            <span>{user.email}</span>
                            <span>•</span>
                            <span>{user.phone}</span>
                          </div>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800">
                            Wallet: ${user.wallet.balance}
                          </span>
                          <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-0.5 text-sm font-medium text-blue-800">
                            {user.bookingHistory.length} Bookings
                          </span>
                          {user.verificationStatus.identity && (
                            <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-sm font-medium text-indigo-800">
                              Verified
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex-shrink-0 self-start">
                        <div className="flex flex-col items-end gap-2">
                          <span className="text-sm text-gray-500">
                            Joined: {new Date(user.createdAt).toLocaleDateString()}
                          </span>
                          <span className="text-sm text-gray-500">
                            Last active: {new Date(user.lastLogin).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                    </div>
                 </div>
                
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}