import { NextRequest, NextResponse } from 'next/server';
import { api } from '../api';
import { Car } from '@/types/car';

export type CarListResponse = {
  items: Car[];
  total: number;
};

export async function GET(req: NextRequest) {
  const { data } = await api<CarListResponse>('/campers');

  const { searchParams } = new URL(req.url);

  const location = searchParams.get('location');
  const type = searchParams.get('type');
  const TV = searchParams.get('TV');
  const AC = searchParams.get('AC');
  const automatic = searchParams.get('automatic');
  const kitchen = searchParams.get('kitchen');
  const bathroom = searchParams.get('bathroom');

  console.log(location, type, TV, AC, automatic, kitchen, bathroom);

  return NextResponse.json({ data });
}
