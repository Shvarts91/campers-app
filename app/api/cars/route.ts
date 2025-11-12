import { NextResponse } from 'next/server';
import { api } from '../api';
import { Car } from '@/types/car';

export type CarListResponse = {
  items: Car[];
  total: number;
};

export async function GET(req: Request) {
  const { data } = await api<CarListResponse>('/campers');

  return NextResponse.json({ data });
}

// export async function POST(req: Request) {
//   const body = await req.json();
//   const { location, equipment, type } = body;

//   let filteredCars = [...cars];

//   if (location) {
//     filteredCars = filteredCars.filter((car) => {
//       car.location.toLowerCase().includes(location.toLowerCase());
//     });
//   }

//   if (type) {
//     filteredCars = filteredCars.filter((car) => car.type === type);
//   }

//   if (equipment) {
//     filteredCars = filteredCars.filter((car) => {
//       return Object.entries(equipment).every(([key, value]) => {
//         if (value === true) {
//           return car.equipment[key as keyof typeof car.equipment] === true;
//         }
//         return true;
//       });
//     });
//   }

//   return NextResponse.json(filteredCars);
// }
