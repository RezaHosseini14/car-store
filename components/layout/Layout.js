import Link from "next/link";
import styles from "./Layout.module.css";
function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <Link href="/">
          <h1>asdg store</h1>
        </Link>
      </header>
      <div className={styles.container}>{children}</div>
      <footer className={styles.footer}>careStore</footer>
    </>
  );
}

export default Layout;
