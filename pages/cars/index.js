import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsData";
import Categoreis from "@/components/module/Categoreis";

function Details() {
  return (
    <>
      <Categoreis />
      <CarsPage data={carsData} />
    </>
  );
}

export default Details;
