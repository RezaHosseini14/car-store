import Card from "../module/Card";
import styles from "./CarsPage.module.css";
function carsPage({ data }) {
  return (
    <div className={styles.container}>
      {data.map((car) => (
        <Card key={car.id} {...car} />
      ))}
    </div>
  );
}

export default carsPage;
