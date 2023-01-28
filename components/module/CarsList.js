import styles from "./CarsList.module.css";
import Card from "./Card";
import Back from "../icons/Back";
import { useRouter } from "next/router";

function CarsList(props) {
  const data = props;
  const router = useRouter();

  const backHandler = () => {
    router.back();
  };

  return (
    <div className={styles.container}>
      <div className={styles.back} onClick={backHandler}>
        <Back />
        <span>Back</span>
      </div>
      <div className={styles.cards}>
        {data.data.map((item) => (
          <Card {...item} />
        ))}
      </div>
    </div>
  );
}

export default CarsList;
