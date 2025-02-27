import { Link } from 'react-router-dom';
import { PlusIcon } from '@heroicons/react/24/outline';
import type { Car } from '../types/car';

const dummyCars: Car[] = [
  {
    id: '1',
    name: 'Toyota Camry',
    model: '2025',
    power: '203 HP',
    variant: 'hybrid',
    images: ['https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=500'],
    view360: [],
    color: 'Midnight Blue',
    passengerCapacity: 5,
    features: {
      airbags: 8,
      adasLevel: 'Level 2',
      music: true,
      autopilot: true,
      safetyRatings: '5 Star',
      seatComfortability: 'Premium',
      sunroof: true,
      powerDriverSeat: true,
      powerWindows: true,
      airConditioning: true,
      wirelessCharger: true,
      cruiseControl: true,
      vanityMirror: true,
      usbCharger: true,
      voiceRecognition: true,
      bluetooth: true,
      alloyWheels: true,
      stabilityControl: true,
      abs: true,
      keylessEntry: true,
      speedAlert: true,
      infotainment: true,
    },
  },
  {
    id: '2',
    name: 'Tesla Model 3',
    model: '2025',
    power: '283 HP',
    variant: 'electric',
    images: ['https://images.unsplash.com/photo-1619767886558-efdc259b6e09?w=500'],
    view360: [],
    color: 'Pearl White',
    passengerCapacity: 5,
    features: {
      airbags: 8,
      adasLevel: 'Level 3',
      music: true,
      autopilot: true,
      safetyRatings: '5 Star',
      seatComfortability: 'Premium',
      sunroof: true,
      powerDriverSeat: true,
      powerWindows: true,
      airConditioning: true,
      wirelessCharger: true,
      cruiseControl: true,
      vanityMirror: true,
      usbCharger: true,
      voiceRecognition: true,
      bluetooth: true,
      alloyWheels: true,
      stabilityControl: true,
      abs: true,
      keylessEntry: true,
      speedAlert: true,
      infotainment: true,
    },
  },
  {
    id: '3',
    name: 'BMW 5 Series',
    model: '2025',
    power: '335 HP',
    variant: 'petrol',
    images: ['https://images.unsplash.com/photo-1523983388277-336a66bf9bcd?w=500'],
    view360: [],
    color: 'Carbon Black',
    passengerCapacity: 5,
    features: {
      airbags: 10,
      adasLevel: 'Level 2',
      music: true,
      autopilot: true,
      safetyRatings: '5 Star',
      seatComfortability: 'Premium',
      sunroof: true,
      powerDriverSeat: true,
      powerWindows: true,
      airConditioning: true,
      wirelessCharger: true,
      cruiseControl: true,
      vanityMirror: true,
      usbCharger: true,
      voiceRecognition: true,
      bluetooth: true,
      alloyWheels: true,
      stabilityControl: true,
      abs: true,
      keylessEntry: true,
      speedAlert: true,
      infotainment: true,
    },
  },
];

export default function CarList() {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
            Cars
          </h1>
          <Link
            to="/cars/add"
            className="neo-button inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold"
          >
            <PlusIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Add Car
          </Link>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
        <div className="py-4">
          <div className="glass-card rounded-xl divide-y divide-gray-200/50">
            <ul role="list" className="divide-y divide-gray-200/50">
              {dummyCars.map((car) => (
                <li key={car.id} className="hover:bg-white/40 transition-colors duration-200">
                  <div className="flex items-center px-6 py-5">
                    <div className="flex min-w-0 flex-1 items-center">
                      <div className="flex-shrink-0">
                        <img 
                          className="h-24 w-36 rounded-lg object-cover shadow-lg" 
                          src={car.images[0]} 
                          alt={car.name} 
                        />
                      </div>
                      <div className="min-w-0 flex-1 px-6">
                        <div>
                          <p className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">
                            {car.name}
                          </p>
                          <div className="mt-2 flex">
                            <div className="flex items-center text-sm text-gray-600">
                              <span className="truncate">Model: {car.model}</span>
                              <span className="mx-2">•</span>
                              <span>{car.power}</span>
                              <span className="mx-2">•</span>
                              <span className="capitalize">{car.variant}</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-0.5 text-sm font-medium text-green-800">
                            {car.features.airbags} Airbags
                          </span>
                          <span className="inline-flex items-center rounded-full bg-blue-100 px-3 py-0.5 text-sm font-medium text-blue-800">
                            {car.features.adasLevel}
                          </span>
                          <span className="inline-flex items-center rounded-full bg-purple-100 px-3 py-0.5 text-sm font-medium text-purple-800">
                            {car.passengerCapacity} Seats
                          </span>
                          <span className="inline-flex items-center rounded-full bg-yellow-100 px-3 py-0.5 text-sm font-medium text-yellow-800">
                            {car.color}
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