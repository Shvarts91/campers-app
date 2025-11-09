import { getCars } from '@/lib/api';
import Filters from '@/components/Filters/Filters';

const Sidebar = async () => {
  const catalogData = await getCars();

  return <Filters cars={catalogData.items} />;
};

export default Sidebar;
