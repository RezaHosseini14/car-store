import Link from "next/link";
import styles from "./AllButton.module.css";

function AllButtun() {
  return (
    <div className={styles.container}>
      <Link href="/cars">All Cars</Link>
    </div>
  );
}

export default AllButtun;
