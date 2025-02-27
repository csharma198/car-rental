export interface UserWallet {
  balance: number;
  currency: string;
  transactions: {
    id: string;
    date: string;
    amount: number;
    type: 'credit' | 'debit';
    description: string;
  }[];
}

export interface UserBooking {
  id: string;
  date: string;
  pickup: string;
  dropoff: string;
  amount: number;
  status: 'completed' | 'cancelled' | 'in-progress';
  driverName: string;
  vehicleDetails: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  avatar?: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  wallet: UserWallet;
  bookingHistory: UserBooking[];
  preferences: {
    language: string;
    currency: string;
    notifications: boolean;
    newsletter: boolean;
  };
  verificationStatus: {
    email: boolean;
    phone: boolean;
    identity: boolean;
  };
  createdAt: string;
  lastLogin: string;
}