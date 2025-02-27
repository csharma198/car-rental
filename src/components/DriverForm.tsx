import { useState, useRef } from 'react';
import type { Driver } from '../types/driver';
import { PhotoIcon } from '@heroicons/react/24/solid';

export default function DriverForm() {
  const [driver, setDriver] = useState<Partial<Driver>>({
    gender: 'Male',
    licenseType: 'Commercial',
    backgroundVerificationStatus: 'Pending',
    vehicleCategory: 'Sedan',
    availabilityStatus: 'Active',
    workSchedule: 'Full-time',
    bankDetails: {
      paymentMode: 'Bank Transfer',
      salaryRate: 25,
      accountNumber: '',
      ifscCode: '',
    },
    performance: {
      totalTrips: 0,
      averageRating: 0,
      customerReviews: [],
      penalties: [],
    },
    emergency: {
      emergencyContactName: '',
      emergencyContactNumber: '',
      insuranceDetails: '',
      medicalConditions: '',
    },
  });
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Driver data:', driver);
    console.log('Profile picture:', profilePicture);
  };

  const handleProfilePictureChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setProfilePicture(e.target.files[0]);
    }
  };

  const removeProfilePicture = () => {
    setProfilePicture(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-6 p-6">
        {/* Personal Information */}
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
          <p className="mt-1 text-sm text-gray-500">Add new driver to the fleet.</p>
        </div>

        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          {/* Profile Picture Upload */}
          <div className="sm:col-span-6">
            <div className="mt-1 flex items-center gap-x-6">
              {profilePicture ? (
                <div className="relative">
                  <img
                    src={URL.createObjectURL(profilePicture)}
                    alt="Profile preview"
                    className="h-24 w-24 rounded-full object-cover"
                  />
                  <button
                    type="button"
                    onClick={removeProfilePicture}
                    className="absolute -top-2 -right-2 rounded-full bg-red-100 p-1 text-red-600 hover:bg-red-200"
                  >
                    <span className="sr-only">Remove</span>
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              ) : (
                <div className="relative h-24 w-24">
                  <div className="relative h-24 w-24 overflow-hidden rounded-full bg-gray-100">
                    <PhotoIcon className="h-24 w-24 text-gray-300" aria-hidden="true" />
                  </div>
                  <label
                    htmlFor="profile-picture"
                    className="absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black bg-opacity-0 transition-all hover:bg-opacity-20"
                  >
                    <span className="sr-only">Upload profile picture</span>
                    <input
                      ref={fileInputRef}
                      type="file"
                      id="profile-picture"
                      name="profile-picture"
                      accept="image/*"
                      onChange={handleProfilePictureChange}
                      className="sr-only"
                    />
                  </label>
                </div>
              )}
              <div>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="neo-button rounded-md px-3 py-2 text-sm"
                >
                  {profilePicture ? 'Change photo' : 'Upload photo'}
                </button>
                <p className="mt-2 text-xs text-gray-500">JPG, PNG, GIF up to 10MB</p>
              </div>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={driver.fullName || ''}
                onChange={(e) => setDriver(prev => ({ ...prev, fullName: e.target.value }))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <div className="mt-1">
              <input
                type="date"
                name="dateOfBirth"
                id="dateOfBirth"
                value={driver.dateOfBirth || ''}
                onChange={(e) => setDriver(prev => ({ ...prev, dateOfBirth: e.target.value }))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            <div className="mt-1">
              <select
                id="gender"
                name="gender"
                value={driver.gender || 'Male'}
                onChange={(e) => setDriver(prev => ({ ...prev, gender: e.target.value as Driver['gender'] }))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700">
              Contact Number
            </label>
            <div className="mt-1">
              <input
                type="tel"
                name="contactNumber"
                id="contactNumber"
                value={driver.contactNumber || ''}
                onChange={(e) => setDriver(prev => ({ ...prev, contactNumber: e.target.value }))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="mt-1">
              <input
                type="email"
                name="email"
                id="email"
                value={driver.email || ''}
                onChange={(e) => setDriver(prev => ({ ...prev, email: e.target.value }))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <div className="mt-1">
              <textarea
                name="address"
                id="address"
                rows={3}
                value={driver.address || ''}
                onChange={(e) => setDriver(prev => ({ ...prev, address: e.target.value }))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
          </div>
        </div>

        {/* Driver Credentials */}
        <div className="pt-8">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Driver Credentials</h3>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="licenseNumber" className="block text-sm font-medium text-gray-700">
                Driver's License Number
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="licenseNumber"
                  id="licenseNumber"
                  value={driver.licenseNumber || ''}
                  onChange={(e) => setDriver(prev => ({ ...prev, licenseNumber: e.target.value }))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="licenseExpiry" className="block text-sm font-medium text-gray-700">
                License Expiry Date
              </label>
              <div className="mt-1">
                <input
                  type="date"
                  name="licenseExpiry"
                  id="licenseExpiry"
                  value={driver.licenseExpiry || ''}
                  onChange={(e) => setDriver(prev => ({ ...prev, licenseExpiry: e.target.value }))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="licenseType" className="block text-sm font-medium text-gray-700">
                License Type
              </label>
              <div className="mt-1">
                <select
                  id="licenseType"
                  name="licenseType"
                  value={driver.licenseType || 'Commercial'}
                  onChange={(e) => setDriver(prev => ({ ...prev, licenseType: e.target.value as Driver['licenseType'] }))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option>Commercial</option>
                  <option>Private</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="idProof" className="block text-sm font-medium text-gray-700">
                ID Proof
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="idProof"
                  id="idProof"
                  value={driver.idProof || ''}
                  onChange={(e) => setDriver(prev => ({ ...prev, idProof: e.target.value }))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Passport, Aadhar, etc."
                />
              </div>
            </div>
          </div>
        </div>

        {/* Vehicle & Assignment */}
        <div className="pt-8">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Vehicle & Assignment</h3>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="vehicleModel" className="block text-sm font-medium text-gray-700">
                Assigned Vehicle Model
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="vehicleModel"
                  id="vehicleModel"
                  value={driver.assignedVehicle?.model || ''}
                  onChange={(e) => setDriver(prev => ({ 
                    ...prev, 
                    assignedVehicle: { 
                      ...prev.assignedVehicle, 
                      model: e.target.value 
                    } 
                  }))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="vehicleNumber" className="block text-sm font-medium text-gray-700">
                Vehicle Number
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="vehicleNumber"
                  id="vehicleNumber"
                  value={driver.assignedVehicle?.number || ''}
                  onChange={(e) => setDriver(prev => ({ 
                    ...prev, 
                    assignedVehicle: { 
                      ...prev.assignedVehicle, 
                      number: e.target.value 
                    } 
                  }))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="vehicleCategory" className="block text-sm font-medium text-gray-700">
                Vehicle Category
              </label>
              <div className="mt-1">
                <select
                  id="vehicleCategory"
                  name="vehicleCategory"
                  value={driver.vehicleCategory || 'Sedan'}
                  onChange={(e) => setDriver(prev => ({ ...prev, vehicleCategory: e.target.value as Driver['vehicleCategory'] }))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option>Sedan</option>
                  <option>SUV</option>
                  <option>Luxury</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="currentLocation" className="block text-sm font-medium text-gray-700">
                Current Location
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="currentLocation"
                  id="currentLocation"
                  value={driver.currentLocation || ''}
                  onChange={(e) => setDriver(prev => ({ ...prev, currentLocation: e.target.value }))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Employment Details */}
        <div className="pt-8">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Employment Details</h3>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="employeeId" className="block text-sm font-medium text-gray-700">
                Employee ID
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="employeeId"
                  id="employeeId"
                  value={driver.employeeId || ''}
                  onChange={(e) => setDriver(prev => ({ ...prev, employeeId: e.target.value }))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="dateOfJoining" className="block text-sm font-medium text-gray-700">
                Date of Joining
              </label>
              <div className="mt-1">
                <input
                  type="date"
                  name="dateOfJoining"
                  id="dateOfJoining"
                  value={driver.dateOfJoining || ''}
                  onChange={(e) => setDriver(prev => ({ ...prev, dateOfJoining: e.target.value }))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="workSchedule" className="block text-sm font-medium text-gray-700">
                Work Schedule
              </label>
              <div className="mt-1">
                <select
                  id="workSchedule"
                  name="workSchedule"
                  value={driver.workSchedule || 'Full-time'}
                  onChange={(e) => setDriver(prev => ({ ...prev, workSchedule: e.target.value as Driver['workSchedule'] }))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option>Full-time</option>
                  <option>Part-time</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="shiftTiming" className="block text-sm font-medium text-gray-700">
                Shift Timing
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="shiftTiming"
                  id="shiftTiming"
                  value={driver.shiftTiming || ''}
                  onChange={(e) => setDriver(prev => ({ ...prev, shiftTiming: e.target.value }))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="e.g., 9:00 AM - 5:00 PM"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bank & Payment Details */}
        <div className="pt-8">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Bank & Payment Details</h3>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="accountNumber" className="block text-sm font-medium text-gray-700">
                Bank Account Number
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="accountNumber"
                  id="accountNumber"
                  value={driver.bankDetails?.accountNumber || ''}
                  onChange={(e) => setDriver(prev => ({ 
                    ...prev, 
                    bankDetails: { 
                      ...prev.bankDetails!, 
                      accountNumber: e.target.value 
                    } 
                  }))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="ifscCode" className="block text-sm font-medium text-gray-700">
                IFSC Code
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="ifscCode"
                  id="ifscCode"
                  value={driver.bankDetails?.ifscCode || ''}
                  onChange={(e) => setDriver(prev => ({ 
                    ...prev, 
                    bankDetails: { 
                      ...prev.bankDetails!, 
                      ifscCode: e.target.value 
                    } 
                  }))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="paymentMode" className="block text-sm font-medium text-gray-700">
                Payment Mode
              </label>
              <div className="mt-1">
                <select
                  id="paymentMode"
                  name="paymentMode"
                  value={driver.bankDetails?.paymentMode || 'Bank Transfer'}
                  onChange={(e) => setDriver(prev => ({ 
                    ...prev, 
                    bankDetails: { 
                      ...prev.bankDetails!, 
                      paymentMode: e.target.value as Driver['bankDetails']['paymentMode']
                    } 
                  }))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option>Bank Transfer</option>
                  <option>Cash</option>
                </select>
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="salaryRate" className="block text-sm font-medium text-gray-700">
                Salary Rate (per hour)
              </label>
              <div className="mt-1">
                <input
                  type="number"
                  name="salaryRate"
                  id="salaryRate"
                  value={driver.bankDetails?.salaryRate || ''}
                  onChange={(e) => setDriver(prev => ({ 
                    ...prev, 
                    bankDetails: { 
                      ...prev.bankDetails!, 
                      salaryRate: parseFloat(e.target.value) 
                    } 
                  }))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Emergency & Insurance */}
        <div className="pt-8">
          <h3 className="text-lg font-medium leading-6 text-gray-900">Emergency & Insurance</h3>
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="emergencyContactName" className="block text-sm font-medium text-gray-700">
                Emergency Contact Name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="emergencyContactName"
                  id="emergencyContactName"
                  value={driver.emergency?.emergencyContactName || ''}
                  onChange={(e) => setDriver(prev => ({ 
                    ...prev, 
                    emergency: { 
                      ...prev.emergency!, 
                      emergencyContactName: e.target.value 
                    } 
                  }))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="emergencyContactNumber" className="block text-sm font-medium text-gray-700">
                Emergency Contact Number
              </label>
              <div className="mt-1">
                <input
                  type="tel"
                  name="emergencyContactNumber"
                  id="emergencyContactNumber"
                  value={driver.emergency?.emergencyContactNumber || ''}
                  onChange={(e) => setDriver(prev => ({ 
                    ...prev, 
                    emergency: { 
                      ...prev.emergency!, 
                      emergencyContactNumber: e.target.value 
                    } 
                  }))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="insuranceDetails" className="block text-sm font-medium text-gray-700">
                Insurance Details
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="insuranceDetails"
                  id="insuranceDetails"
                  value={driver.emergency?.insuranceDetails || ''}
                  onChange={(e) => setDriver(prev => ({ 
                    ...prev, 
                    emergency: { 
                      ...prev.emergency!, 
                      insuranceDetails: e.target.value 
                    } 
                  }))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="Policy number, provider, etc."
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="medicalConditions" className="block text-sm font-medium text-gray-700">
                Medical Conditions
              </label>
              <div className="mt-1">
                <textarea
                  name="medicalConditions"
                  id="medicalConditions"
                  rows={3}
                  value={driver.emergency?.medicalConditions || ''}
                  onChange={(e) => setDriver(prev => ({ 
                    ...prev, 
                    emergency: { 
                      ...prev.emergency!, 
                      medicalConditions: e.target.value 
                    } 
                  }))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  placeholder="List any relevant medical conditions"
                />
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
          Save Driver
        </button>
      </div>
    </form>
  );
}