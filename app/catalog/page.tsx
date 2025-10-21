import CarsList from "@/components/CarList/CarList";
import { getCars } from "@/lib/api";

const Catalog = async () => {
  const catalogData = await getCars();

  return (
    <section>
      <h1>Catalog</h1>
      {catalogData?.items?.length > 0 && <CarsList cars={catalogData.items} />}
    </section>
  );
};

export default Catalog;
