import { usePosts } from "../hooks/usePosts";
import styles from "./SearchBox.module.css";

const SearchBox = () => {
  const { query, setQuery } = usePosts();

  return (
    <form className={styles.searchBox}>
      <input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
        }}
        placeholder="Search..."
      />
    </form>
  );
};

export default SearchBox;
