import { CoupeIcon, HatchbackIcon, PickupIcon, SedanIcon, StationWagonIcon, SUVIcon, VanIcon, ManualIcon, AutoIcon, GasolineIcon, DieselIcon, ElectricIcon, DieselHybridIcon, GasHybridIcon, } from '../icons/Icons';
  
  export const colors = [
    { name: 'Silver', hex: '#C0C0C0', class: 'bg-slate-300' },
    { name: 'Beige', hex: '#F5F5DC', class: 'bg-amber-100' },
    { name: 'White', hex: '#FFFFFF', class: 'bg-white' },
    { name: 'Blue', hex: '#2563EB', class: 'bg-blue-600' },
    { name: 'Camel', hex: '#C19A6B', class: 'bg-amber-700' },
    { name: 'Coral', hex: '#FF7F50', class: 'bg-orange-400' },
    { name: 'Gold', hex: '#FFD700', class: 'bg-yellow-400' },
    { name: 'Grey', hex: '#808080', class: 'bg-gray-500' },
    { name: 'Yellow', hex: '#FACC15', class: 'bg-yellow-400' },
    { name: 'Brown', hex: '#8B4513', class: 'bg-amber-800' },
    { name: 'Red', hex: '#DC2626', class: 'bg-red-600' },
    { name: 'Black', hex: '#000000', class: 'bg-black' },
    { name: 'Orange', hex: '#F97316', class: 'bg-orange-500' },
    { name: 'Pink', hex: '#EC4899', class: 'bg-pink-500' },
    { name: 'Green', hex: '#16A34A', class: 'bg-green-600' },
    { name: 'Purple', hex: '#9333EA', class: 'bg-purple-600' },
  ];

  export const bodyTypes = [
    { label: 'Sedan', icon: SedanIcon },
    { label: 'Coupe', icon: CoupeIcon },
    { label: 'SUV', icon: SUVIcon },
    { label: 'Station Wagon', icon: StationWagonIcon },
    { label: 'Hatchback', icon: HatchbackIcon },
    { label: 'Pickup', icon: PickupIcon },
    { label: 'Van / MPV', icon: VanIcon },
  ];

  export const fuelTypes = [
    { label: 'Gasoline', icon: GasolineIcon },
    { label: 'Diesel', icon: DieselIcon },
    { label: 'Electric', icon: ElectricIcon },
    { label: 'Gasoline Hybrid', icon: GasHybridIcon },
    { label: 'Diesel Hybrid', icon: DieselHybridIcon },
  ];

  export const transmissions = [
    { label: 'Manual', icon: ManualIcon },
    { label: 'Automatic', icon: AutoIcon },
  ];