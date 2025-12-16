'use client';

import Filters from '@/components/Filters/Filters';
import { useParams } from 'next/navigation';

const Sidebar = () => {
  const param = useParams();
  if (param.id) return null;

  return <Filters />;
};

export default Sidebar;
