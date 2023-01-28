import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./SerachBar.module.css";

function SearchBar() {
  const router = useRouter();
  const [min, setMin] = useState("");
  const [max, setMax] = useState("");
  const searchHandler = () => {
    if (min && max) {
      router.push(`/filter/${min}/${max}`);
    } else {
      alert("set min and max");
    }
  };
  return (
    <div className={styles.container}>
      <div>
        <input
          type="number"
          placeholder="min"
          value={min}
          onChange={(e) => setMin(e.target.value)}
        />
        <input
          type="number"
          placeholder="max"
          value={max}
          onChange={(e) => setMax(e.target.value)}
        />
      </div>
      <button onClick={searchHandler}>search</button>
    </div>
  );
}

export default SearchBar;
