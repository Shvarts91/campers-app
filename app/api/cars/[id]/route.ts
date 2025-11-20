import { NextRequest, NextResponse } from 'next/server';
import { api } from '../../api';
// import { CarListResponse } from '@/lib/api/clientApi';
import { Car } from '@/types/car';

type Props = {
  params: Promise<{ id: string }>;
};

export type CarListResponse = {
  items: Car[];
  total: number;
};

export async function GET(req: NextRequest, { params }: Props) {
  const { data } = await api<CarListResponse>('/campers');

  const { id } = await params;
  console.log(id);

  const car = data.items.find((item) => item.id === id);

  if (car) {
    return NextResponse.json(car);
  }

  return NextResponse.json({ error: 'Failed to fetch note' }, { status: 500 });
}
