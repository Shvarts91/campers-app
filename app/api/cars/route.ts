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

  const getStringParam = (
    name: string,
    searchParams: URLSearchParams,
  ): string | undefined => {
    const value = searchParams.get(name);
    return value && value !== '' ? value : undefined;
  };

  const getBooleanParam = (
    name: string,
    searchParams: URLSearchParams,
  ): boolean | undefined => {
    const value = searchParams.get(name);
    return value?.toLowerCase() === 'true' ? true : undefined;
  };

  const location = getStringParam('location', searchParams);
  const type = getStringParam('type', searchParams);
  const TV = getBooleanParam('TV', searchParams);
  const AC = getBooleanParam('AC', searchParams);
  const automatic = getBooleanParam('automatic', searchParams);
  const kitchen = getBooleanParam('kitchen', searchParams);
  const bathroom = getBooleanParam('bathroom', searchParams);

  const filtered = data.items.filter((item) => {
    if (
      location &&
      !item.location.toLowerCase().includes(location.toLowerCase())
    ) {
      return false;
    }

    if (type && !item.form.toLowerCase().includes(type.toLowerCase())) {
      return false;
    }

    if (TV && !item.TV) {
      return false;
    }

    if (AC && !item.AC) {
      return false;
    }

    if (automatic && item.transmission !== 'automatic') {
      return false;
    }

    if (kitchen && !item.kitchen) {
      return false;
    }

    if (bathroom && !item.bathroom) {
      return false;
    }
    return true;
  });

  const total = filtered.length;

  const filteredData = {
    items: filtered,
    total: total,
  };

  return NextResponse.json({ data: filteredData });
}
