import { useState } from 'react';
import {
  ChartBarIcon,
  UsersIcon,
  TruckIcon,
  CurrencyDollarIcon,
  ClockIcon,
  StarIcon,
} from '@heroicons/react/24/outline';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const stats = [
  { 
    name: 'Total Drivers', 
    value: '35', 
    change: '+12.5%', 
    changeType: 'positive',
    icon: UsersIcon 
  },
  { 
    name: 'Active Cars', 
    value: '42', 
    change: '+18.2%', 
    changeType: 'positive',
    icon: TruckIcon 
  },
  { 
    name: 'Revenue', 
    value: '$45,678', 
    change: '+8.1%', 
    changeType: 'positive',
    icon: CurrencyDollarIcon 
  },
  { 
    name: 'Avg. Trip Time', 
    value: '42m', 
    change: '-2.3%', 
    changeType: 'negative',
    icon: ClockIcon 
  },
  { 
    name: 'Customer Rating', 
    value: '4.8', 
    change: '+0.3', 
    changeType: 'positive',
    icon: StarIcon 
  },
];

const bookingData = [
  { date: '2024-02-01', bookings: 45 },
  { date: '2024-02-02', bookings: 52 },
  { date: '2024-02-03', bookings: 48 },
  { date: '2024-02-04', bookings: 70 },
  { date: '2024-02-05', bookings: 61 },
  { date: '2024-02-06', bookings: 65 },
  { date: '2024-02-07', bookings: 75 },
];

const revenueData = [
  { name: 'Mon', revenue: 4000 },
  { name: 'Tue', revenue: 3000 },
  { name: 'Wed', revenue: 2000 },
  { name: 'Thu', revenue: 2780 },
  { name: 'Fri', revenue: 1890 },
  { name: 'Sat', revenue: 2390 },
  { name: 'Sun', revenue: 3490 },
];

const vehicleTypeData = [
  { name: 'Sedan', value: 400 },
  { name: 'SUV', value: 300 },
  { name: 'Luxury', value: 200 },
  { name: 'Electric', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const recentTrips = [
  {
    id: 1,
    driver: 'John Smith',
    customer: 'Alice Johnson',
    pickup: 'Central Park',
    dropoff: 'Times Square',
    amount: '$25.50',
    status: 'completed',
  },
  {
    id: 2,
    driver: 'Sarah Johnson',
    customer: 'Bob Wilson',
    pickup: 'Brooklyn Bridge',
    dropoff: 'Manhattan Bridge',
    amount: '$32.75',
    status: 'in-progress',
  },
  {
    id: 3,
    driver: 'Michael Chen',
    customer: 'Carol Davis',
    pickup: 'JFK Airport',
    dropoff: 'Manhattan',
    amount: '$78.00',
    status: 'completed',
  },
];

export default function Dashboard() {
  const [timeRange, setTimeRange] = useState('today');

  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
          Dashboard
        </h1>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="py-4">
          {/* Time Range Selector */}
          <div className="mb-6">
            <div className="sm:flex sm:items-center">
              <div className="sm:flex-auto">
                <h2 className="text-xl font-semibold text-gray-900">Overview</h2>
                <p className="mt-2 text-sm text-gray-700">
                  Key metrics and performance indicators for your fleet.
                </p>
              </div>
              <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                <select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="today">Today</option>
                  <option value="week">This Week</option>
                  <option value="month">This Month</option>
                  <option value="year">This Year</option>
                </select>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((stat) => (
              <div
                key={stat.name}
                className="glass-card overflow-hidden rounded-lg px-4 py-5 sm:p-6"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <stat.icon className="h-6 w-6 text-gray-400" aria-hidden="true" />
                  </div>
                  <div className="ml-5 w-0 flex-1">
                    <dl>
                      <dt className="text-sm font-medium text-gray-500 truncate">{stat.name}</dt>
                      <dd>
                        <div className="text-lg font-medium text-gray-900">{stat.value}</div>
                      </dd>
                    </dl>
                  </div>
                </div>
                <div className="mt-4">
                  <div className={`text-sm ${
                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Charts Grid */}
          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
            {/* Daily Bookings Chart */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Daily Bookings</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={bookingData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Area 
                      type="monotone" 
                      dataKey="bookings" 
                      stroke="#8884d8" 
                      fill="url(#colorBookings)" 
                    />
                    <defs>
                      <linearGradient id="colorBookings" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1}/>
                      </linearGradient>
                    </defs>
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Weekly Revenue Chart */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Weekly Revenue</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={revenueData}
                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="revenue" fill="#82ca9d" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Vehicle Type Distribution */}
            <div className="glass-card rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Vehicle Type Distribution</h3>
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={vehicleTypeData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {vehicleTypeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Recent Trips */}
          <div className="mt-8">
            <div className="glass-card sm:flex sm:items-center rounded-t-xl p-6">
              <div className="sm:flex-auto">
                <h3 className="text-xl font-semibold text-gray-900">Recent Trips</h3>
                <p className="mt-2 text-sm text-gray-700">
                  A list of recent trips including driver and customer details.
                </p>
              </div>
            </div>
            <div className="glass-card mt-0 rounded-t-none rounded-b-xl">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead>
                    <tr>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Driver
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Customer
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Pickup
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Dropoff
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Amount
                      </th>
                      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {recentTrips.map((trip) => (
                      <tr key={trip.id}>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {trip.driver}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {trip.customer}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {trip.pickup}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {trip.dropoff}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {trip.amount}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm">
                          <span className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                            trip.status === 'completed' 
                              ? 'bg-green-100 text-green-800' 
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {trip.status === 'completed' ? 'Completed' : 'In Progress'}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}