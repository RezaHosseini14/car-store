import CarsList from "@/components/module/CarsList";
import carsData from "@/data/carsData";
import { useRouter } from "next/router";

function categoriesItem() {
  const router = useRouter();
  const catItem = router.query.catItem;
  const filter = carsData.filter((car) => car.category === catItem);
  return (
    <div>
      <CarsList data={filter} />
    </div>
  );
}

export default categoriesItem;
