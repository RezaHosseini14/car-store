import Link from "next/link";
import Hatchback from "../icons/Hatchback";
import Sedan from "../icons/Sedan";
import Sport from "../icons/Sport";
import Suv from "../icons/Suv";
import styles from "./Categories.module.css";

function Categoreis() {
  return (
    <div className={styles.container}>
      <Link href="/categories/sedan">
        <div>
          <p>Sedan</p>
          <Sedan />
        </div>
      </Link>
      <Link href="/categories/suv">
        <div>
          <p>Suv</p>
          <Suv />
        </div>
      </Link>

      <Link href="/categories/hatchback">
        <div className="mirror">
          <p>Hatchback</p>
          <Hatchback className={styles.mirror} />
        </div>
      </Link>

      <Link href="/categories/sport">
        <div>
          <p>Sport</p>
          <Sport />
        </div>
      </Link>
    </div>
  );
}

export default Categoreis;
