import { useState, useRef } from 'react';
import type { Car, CarFeatures } from '../types/car';
import { PhotoIcon, VideoCameraIcon } from '@heroicons/react/24/solid';

const defaultFeatures: CarFeatures = {
  airbags: 6,
  adasLevel: 'Level 2',
  music: true,
  autopilot: false,
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
};

export default function CarForm() {
  const [car, setCar] = useState<Partial<Car>>({
    features: defaultFeatures,
  });
  const [selectedImages, setSelectedImages] = useState<File[]>([]);
  const [selected360Images, setSelected360Images] = useState<File[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null);
  const imageInputRef = useRef<HTMLInputElement>(null);
  const view360InputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Car data:', car);
    console.log('Selected images:', selectedImages);
    console.log('Selected 360° images:', selected360Images);
    console.log('Selected video:', selectedVideo);
  };

  const handleFeatureChange = (key: keyof CarFeatures, value: any) => {
    setCar(prev => ({
      ...prev,
      features: {
        ...prev.features,
        [key]: value,
      },
    }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelectedImages(Array.from(e.target.files));
    }
  };

  const handle360ImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setSelected360Images(Array.from(e.target.files));
    }
  };

  const handleVideoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedVideo(e.target.files[0]);
    }
  };

  const removeImage = (index: number) => {
    setSelectedImages(prev => prev.filter((_, i) => i !== index));
  };

  const remove360Image = (index: number) => {
    setSelected360Images(prev => prev.filter((_, i) => i !== index));
  };

  const removeVideo = () => {
    setSelectedVideo(null);
    if (videoInputRef.current) {
      videoInputRef.current.value = '';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 divide-y divide-gray-200">
      <div className="space-y-6 p-6">
        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900">Car Details</h3>
          <p className="mt-1 text-sm text-gray-500">Add new car to the rental fleet.</p>
        </div>

        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Car Name
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="name"
                id="name"
                value={car.name || ''}
                onChange={(e) => setCar(prev => ({ ...prev, name: e.target.value }))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="e.g., Toyota Camry"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="model" className="block text-sm font-medium text-gray-700">
              Model
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="model"
                id="model"
                value={car.model || ''}
                onChange={(e) => setCar(prev => ({ ...prev, model: e.target.value }))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="e.g., 2025"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="power" className="block text-sm font-medium text-gray-700">
              Power
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="power"
                id="power"
                value={car.power || ''}
                onChange={(e) => setCar(prev => ({ ...prev, power: e.target.value }))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="e.g., 203 HP"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="variant" className="block text-sm font-medium text-gray-700">
              Variant
            </label>
            <div className="mt-1">
              <select
                id="variant"
                name="variant"
                value={car.variant || 'petrol'}
                onChange={(e) => setCar(prev => ({ ...prev, variant: e.target.value as Car['variant'] }))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option value="diesel">Diesel</option>
                <option value="petrol">Petrol</option>
                <option value="electric">Electric</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="color" className="block text-sm font-medium text-gray-700">
              Color
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="color"
                id="color"
                value={car.color || ''}
                onChange={(e) => setCar(prev => ({ ...prev, color: e.target.value }))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="e.g., Midnight Blue"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="passengerCapacity" className="block text-sm font-medium text-gray-700">
              Passenger Capacity
            </label>
            <div className="mt-1">
              <input
                type="number"
                name="passengerCapacity"
                id="passengerCapacity"
                value={car.passengerCapacity || ''}
                onChange={(e) => setCar(prev => ({ ...prev, passengerCapacity: parseInt(e.target.value) }))}
                className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                placeholder="e.g., 5"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">Media</label>
          <div className="mt-1 grid grid-cols-1 gap-y-4 gap-x-4 sm:grid-cols-3">
            {/* Car Images Upload */}
            <div className="col-span-1">
              <div className="relative flex flex-col justify-center rounded-lg border-2 border-dashed border-gray-300 p-4 hover:border-gray-400 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-4 flex justify-center text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="images"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span className="px-3 py-2">Upload images</span>
                      <input
                        ref={imageInputRef}
                        id="images"
                        name="images"
                        type="file"
                        className="sr-only"
                        multiple
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                    </label>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">PNG, JPG up to 10MB each</p>
                </div>
                {selectedImages.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700">Selected Images:</h4>
                    <ul className="mt-2 divide-y divide-gray-200">
                      {selectedImages.map((file, index) => (
                        <li key={index} className="flex items-center justify-between py-2">
                          <span className="text-sm text-gray-500 truncate">{file.name}</span>
                          <button
                            type="button"
                            onClick={() => removeImage(index)}
                            className="text-sm text-red-600 hover:text-red-800"
                          >
                            Remove
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* 360° Views Upload */}
            <div className="col-span-1">
              <div className="relative flex flex-col justify-center rounded-lg border-2 border-dashed border-gray-300 p-4 hover:border-gray-400 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2">
                <div className="text-center">
                  <PhotoIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-4 flex justify-center text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="view360"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span className="px-3 py-2">Upload 360° views</span>
                      <input
                        ref={view360InputRef}
                        id="view360"
                        name="view360"
                        type="file"
                        className="sr-only"
                        multiple
                        accept="image/*"
                        onChange={handle360ImageChange}
                      />
                    </label>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">360° view images</p>
                </div>
                {selected360Images.length > 0 && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700">Selected 360° Images:</h4>
                    <ul className="mt-2 divide-y divide-gray-200">
                      {selected360Images.map((file, index) => (
                        <li key={index} className="flex items-center justify-between py-2">
                          <span className="text-sm text-gray-500 truncate">{file.name}</span>
                          <button
                            type="button"
                            onClick={() => remove360Image(index)}
                            className="text-sm text-red-600 hover:text-red-800"
                          >
                            Remove
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>

            {/* Video Upload */}
            <div className="col-span-1">
              <div className="relative flex flex-col justify-center rounded-lg border-2 border-dashed border-gray-300 p-4 hover:border-gray-400 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2">
                <div className="text-center">
                  <VideoCameraIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="mt-4 flex justify-center text-sm leading-6 text-gray-600">
                    <label
                      htmlFor="video"
                      className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                    >
                      <span className="px-3 py-2">Upload video</span>
                      <input
                        ref={videoInputRef}
                        id="video"
                        name="video"
                        type="file"
                        className="sr-only"
                        accept="video/*"
                        onChange={handleVideoChange}
                      />
                    </label>
                  </div>
                  <p className="text-xs leading-5 text-gray-600">MP4, WebM up to 100MB</p>
                </div>
                {selectedVideo && (
                  <div className="mt-4">
                    <h4 className="text-sm font-medium text-gray-700">Selected Video:</h4>
                    <div className="mt-2 flex items-center justify-between py-2">
                      <span className="text-sm text-gray-500 truncate">{selectedVideo.name}</span>
                      <button
                        type="button"
                        onClick={removeVideo}
                        className="text-sm text-red-600 hover:text-red-800"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">Features & Specifications</h3>
          <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-center space-x-3">
              <input
                type="number"
                value={car.features?.airbags || 0}
                onChange={(e) => handleFeatureChange('airbags', parseInt(e.target.value))}
                className="block w-20 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
              <label className="text-sm font-medium text-gray-700">Airbags</label>
            </div>

            <div className="flex items-center space-x-3">
              <select
                value={car.features?.adasLevel || 'Level 2'}
                onChange={(e) => handleFeatureChange('adasLevel', e.target.value)}
                className="block w-32 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              >
                <option>Level 1</option>
                <option>Level 2</option>
                <option>Level 3</option>
              </select>
              <label className="text-sm font-medium text-gray-700">ADAS Level</label>
            </div>

            {Object.entries(defaultFeatures).map(([key, value]) => {
              if (typeof value === 'boolean') {
                return (
                  <div key={key} className="relative flex items-start">
                    <div className="flex h-6 items-center">
                      <input
                        id={key}
                        name={key}
                        type="checkbox"
                        checked={car.features?.[key as keyof CarFeatures] as boolean}
                        onChange={(e) => handleFeatureChange(key as keyof CarFeatures, e.target.checked)}
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                    </div>
                    <div className="ml-3 text-sm leading-6">
                      <label htmlFor={key} className="font-medium text-gray-700">
                        {key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())}
                      </label>
                    </div>
                  </div>
                );
              }
              return null;
            })}
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
          className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Save Car
        </button>
      </div>
    </form>
  );
}