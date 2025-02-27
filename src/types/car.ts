export interface CarFeatures {
  airbags: number;
  adasLevel: string;
  music: boolean;
  autopilot: boolean;
  safetyRatings: string;
  seatComfortability: string;
  sunroof: boolean;
  powerDriverSeat: boolean;
  powerWindows: boolean;
  airConditioning: boolean;
  wirelessCharger: boolean;
  cruiseControl: boolean;
  vanityMirror: boolean;
  usbCharger: boolean;
  voiceRecognition: boolean;
  bluetooth: boolean;
  alloyWheels: boolean;
  stabilityControl: boolean;
  abs: boolean;
  keylessEntry: boolean;
  speedAlert: boolean;
  infotainment: boolean;
}

export interface Car {
  id: string;
  name: string;
  model: string;
  power: string;
  variant: 'diesel' | 'petrol' | 'electric' | 'hybrid';
  images: string[];
  view360: string[];
  color: string;
  passengerCapacity: number;
  features: CarFeatures;
}