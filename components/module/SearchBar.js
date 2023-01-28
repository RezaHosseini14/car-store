import styles from "./SerachBar.module.css";

function SearchBar() {
  return (
    <div className={styles.container}>
      <div>
        <input placeholder="min" />
        <input placeholder="max" />
      </div>
      <button>search</button>
    </div>
  );
}

export default SearchBar;
