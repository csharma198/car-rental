export interface DriverBankDetails {
  accountNumber: string;
  ifscCode: string;
  paymentMode: 'Bank Transfer' | 'Cash';
  salaryRate: number;
}

export interface DriverEmergencyDetails {
  emergencyContactName: string;
  emergencyContactNumber: string;
  insuranceDetails: string;
  medicalConditions?: string;
}

export interface DriverPerformance {
  totalTrips: number;
  averageRating: number;
  customerReviews: string[];
  penalties: string[];
}

export interface Driver {
  id: string;
  fullName: string;
  profilePicture: string;
  dateOfBirth: string;
  gender: 'Male' | 'Female' | 'Other';
  contactNumber: string;
  email: string;
  address: string;
  
  // Credentials
  licenseNumber: string;
  licenseExpiry: string;
  licenseType: 'Commercial' | 'Private';
  idProof: string;
  backgroundVerificationStatus: 'Verified' | 'Pending' | 'Failed';
  
  // Vehicle Assignment
  assignedVehicle: {
    model: string;
    number: string;
  };
  vehicleCategory: 'Sedan' | 'SUV' | 'Luxury';
  availabilityStatus: 'Active' | 'Offline' | 'On-Trip';
  currentLocation: string;
  
  // Employment
  employeeId: string;
  dateOfJoining: string;
  workSchedule: 'Full-time' | 'Part-time';
  shiftTiming: string;
  
  bankDetails: DriverBankDetails;
  performance: DriverPerformance;
  emergency: DriverEmergencyDetails;
}