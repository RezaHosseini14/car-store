import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsData";
import Categoreis from "@/components/module/Categoreis";
import SearchBar from "@/components/module/SearchBar";

function Details() {
  return (
    <>
      <SearchBar />
      <Categoreis />
      <CarsPage data={carsData} />
    </>
  );
}

export default Details;
