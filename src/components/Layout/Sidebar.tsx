import { Link, useLocation } from 'react-router-dom';
import { 
  UserGroupIcon, 
  UserPlusIcon,
  TruckIcon,
  PlusCircleIcon,
  QuestionMarkCircleIcon,
  ChartBarIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';
import clsx from 'clsx';

const navigation = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: ChartBarIcon,
  },
  {
    name: 'Users',
    icon: UsersIcon,
    children: [
      { name: 'User List', href: '/users', icon: UsersIcon },
      { name: 'Add User', href: '/users/add', icon: UserPlusIcon },
    ],
  },
  {
    name: 'Drivers',
    icon: UserGroupIcon,
    children: [
      { name: 'Driver List', href: '/drivers', icon: UserGroupIcon },
      { name: 'Add Driver', href: '/drivers/add', icon: UserPlusIcon },
    ],
  },
  {
    name: 'Cars',
    icon: TruckIcon,
    children: [
      { name: 'Car List', href: '/cars', icon: TruckIcon },
      { name: 'Add Car', href: '/cars/add', icon: PlusCircleIcon },
    ],
  },
  {
    name: 'Support',
    href: '/support',
    icon: QuestionMarkCircleIcon,
  },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <div className="flex min-h-0 flex-1 flex-col border-r border-gray-200 bg-white">
      <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
        <div className="flex flex-shrink-0 items-center px-4">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
        </div>
        <nav className="mt-5 flex-1 space-y-1 bg-white px-2">
          {navigation.map((item) => (
            <div key={item.name}>
              {item.children ? (
                <div>
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 py-2">
                    {item.name}
                  </div>
                  {item.children.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.href}
                      className={clsx(
                        location.pathname === subItem.href
                          ? 'bg-gray-100 text-gray-900'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                        'group flex items-center px-3 py-2 text-sm font-medium rounded-md'
                      )}
                    >
                      <subItem.icon
                        className={clsx(
                          location.pathname === subItem.href
                            ? 'text-gray-500'
                            : 'text-gray-400 group-hover:text-gray-500',
                          'mr-3 flex-shrink-0 h-6 w-6'
                        )}
                        aria-hidden="true"
                      />
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  to={item.href}
                  className={clsx(
                    location.pathname === item.href
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900',
                    'group flex items-center px-2 py-2 text-sm font-medium rounded-md'
                  )}
                >
                  <item.icon
                    className={clsx(
                      location.pathname === item.href
                        ? 'text-gray-500'
                        : 'text-gray-400 group-hover:text-gray-500',
                      'mr-3 flex-shrink-0 h-6 w-6'
                    )}
                    aria-hidden="true"
                  />
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}