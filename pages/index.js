import AllButtun from "@/components/module/AllButtun";
import Categoreis from "@/components/module/Categoreis";
import SearchBar from "@/components/module/SearchBar";
import CarsPage from "@/components/templates/CarsPage";
import carsData from "@/data/carsData";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  const cars = carsData.slice(0, 3);
  return (
    <>
      <SearchBar />
      <Categoreis />
      <CarsPage data={cars} />
      <AllButtun />
    </>
  );
}
export default Home;
