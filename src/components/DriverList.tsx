import { Link } from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/24/outline';
import type { Driver } from '../types/driver';

const dummyDrivers: Driver[] = [
  {
    id: '1',
    fullName: 'John Smith',
    profilePicture: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150',
    dateOfBirth: '1990-05-15',
    gender: 'Male',
    contactNumber: '+1 234-567-8901',
    email: 'john.smith@example.com',
    address: '123 Main St, New York, NY 10001',
    licenseNumber: 'DL123456789',
    licenseExpiry: '2025-12-31',
    licenseType: 'Commercial',
    idProof: 'Passport',
    backgroundVerificationStatus: 'Verified',
    assignedVehicle: {
      model: 'Toyota Camry',
      number: 'NYC-1234',
    },
    vehicleCategory: 'Sedan',
    availabilityStatus: 'Active',
    currentLocation: 'Manhattan',
    employeeId: 'EMP001',
    dateOfJoining: '2023-01-15',
    workSchedule: 'Full-time',
    shiftTiming: '9:00 AM - 5:00 PM',
    bankDetails: {
      accountNumber: '****1234',
      ifscCode: 'BANK0001',
      paymentMode: 'Bank Transfer',
      salaryRate: 25,
    },
    performance: {
      totalTrips: 1250,
      averageRating: 4.8,
      customerReviews: ['Excellent service', 'Very professional'],
      penalties: [],
    },
    emergency: {
      emergencyContactName: 'Jane Smith',
      emergencyContactNumber: '+1 234-567-8902',
      insuranceDetails: 'Policy #INS123456',
      medicalConditions: 'None',
    },
  },
  {
    id: '2',
    fullName: 'Sarah Johnson',
    profilePicture: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    dateOfBirth: '1988-08-20',
    gender: 'Female',
    contactNumber: '+1 234-567-8903',
    email: 'sarah.johnson@example.com',
    address: '456 Park Ave, New York, NY 10002',
    licenseNumber: 'DL987654321',
    licenseExpiry: '2024-10-15',
    licenseType: 'Commercial',
    idProof: 'Passport',
    backgroundVerificationStatus: 'Verified',
    assignedVehicle: {
      model: 'Tesla Model 3',
      number: 'NYC-5678',
    },
    vehicleCategory: 'Luxury',
    availabilityStatus: 'On-Trip',
    currentLocation: 'Brooklyn',
    employeeId: 'EMP002',
    dateOfJoining: '2023-03-01',
    workSchedule: 'Full-time',
    shiftTiming: '2:00 PM - 10:00 PM',
    bankDetails: {
      accountNumber: '****5678',
      ifscCode: 'BANK0002',
      paymentMode: 'Bank Transfer',
      salaryRate: 28,
    },
    performance: {
      totalTrips: 850,
      averageRating: 4.9,
      customerReviews: ['Great driver', 'Very punctual'],
      penalties: [],
    },
    emergency: {
      emergencyContactName: 'Mike Johnson',
      emergencyContactNumber: '+1 234-567-8904',
      insuranceDetails: 'Policy #INS789012',
      medicalConditions: 'None',
    },
  },
  {
    id: '3',
    fullName: 'Michael Chen',
    profilePicture: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
    dateOfBirth: '1992-03-10',
    gender: 'Male',
    contactNumber: '+1 234-567-8905',
    email: 'michael.chen@example.com',
    address: '789 Broadway, New York, NY 10003',
    licenseNumber: 'DL456789123',
    licenseExpiry: '2025-06-30',
    licenseType: 'Commercial',
    idProof: 'Passport',
    backgroundVerificationStatus: 'Verified',
    assignedVehicle: {
      model: 'BMW 5 Series',
      number: 'NYC-9012',
    },
    vehicleCategory: 'Luxury',
    availabilityStatus: 'Active',
    currentLocation: 'Queens',
    employeeId: 'EMP003',
    dateOfJoining: '2023-02-15',
    workSchedule: 'Part-time',
    shiftTiming: '6:00 PM - 12:00 AM',
    bankDetails: {
      accountNumber: '****9012',
      ifscCode: 'BANK0003',
      paymentMode: 'Bank Transfer',
      salaryRate: 30,
    },
    performance: {
      totalTrips: 620,
      averageRating: 4.7,
      customerReviews: ['Safe driver', 'Very friendly'],
      penalties: [],
    },
    emergency: {
      emergencyContactName: 'Lisa Chen',
      emergencyContactNumber: '+1 234-567-8906',
      insuranceDetails: 'Policy #INS345678',
      medicalConditions: 'None',
    },
  },
];

export default function DriverList() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
            Drivers
          </h1>
          <Link
            to="/drivers/add"
            className="neo-button inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold"
          >
            <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Add Driver
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <div className="glass-card rounded-xl divide-y divide-gray-200/50">
            <ul role="list" className="divide-y divide-gray-200/50">
              {dummyDrivers.map((driver) => (
                <li key={driver.id} className="hover:bg-white/40 transition-colors duration-200">
                  <div className="flex items-center px-6 py-5">
                    <div className="flex min-w-0 flex-1 items-center">
                      <div className="flex-shrink-0">
                        <img
                          className="h-16 w-16 rounded-full object-cover shadow-lg"
                          src={driver.profilePicture}
                          alt={driver.fullName}
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-6">
                        <div>
                          <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                            {driver.fullName}
                          </p>
                          <div className="mt-1 flex flex-wrap items-center gap-x-4 text-sm text-gray-600">
                            <span>{driver.employeeId}</span>
                            <span>•</span>
                            <span>{driver.email}</span>
                            <span>•</span>
                            <span>{driver.contactNumber}</span>
                          </div>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <span className={`inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium ${
                            driver.availabilityStatus === 'Active' ? 'bg-green-100 text-green-800' :
                            driver.availabilityStatus === 'On-Trip' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-gray-100 text-gray-800'
                          }`}>
                            {driver.availabilityStatus}
                          </span>
                          <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-0.5 text-sm font-medium text-blue-800">
                            {driver.assignedVehicle.model}
                          </span>
                          <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-0.5 text-sm font-medium text-purple-800">
                            {driver.vehicleCategory}
                          </span>
                          <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-0.5 text-sm font-medium text-indigo-800">
                            ⭐ {driver.performance.averageRating}
                          </span>
                        </div>
                      </div>
                      <div className="flex-shrink-0 self-start">
                        <div className="flex flex-col items-end gap-2">
                          <span className="text-sm text-gray-500">{driver.currentLocation}</span>
                          <span className="text-sm text-gray-500">{driver.workSchedule}</span>
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