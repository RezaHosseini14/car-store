import CarsList from "@/components/module/CarsList";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

function FilteredCars() {
  const router = useRouter();
  const [min, max] = router.query.slug || [];

  const filter = carsData.filter(
    (item) => item.price >= min && item.price <= max
  );

  return (
    <div>
      <CarsList data={filter} />
    </div>
  );
}

export default FilteredCars;
