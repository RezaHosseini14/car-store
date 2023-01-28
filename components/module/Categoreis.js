import Hatchback from "../icons/Hatchback";
import Sedan from "../icons/Sedan";
import Sport from "../icons/Sport";
import Suv from "../icons/Suv";
import styles from "./Categories.module.css";

function Categoreis() {
  return (
    <div className={styles.container}>
      <div>
        <p>Sedan</p>
        <Sedan />
      </div>
      <div>
        <p>Suv</p>
        <Suv />
      </div>
      <div className="mirror">
        <p>Hatchback</p>
        <Hatchback className={styles.mirror}/>
      </div>
      <div>
        <p>Sport</p>
        <Sport />
      </div>
    </div>
  );
}

export default Categoreis;
