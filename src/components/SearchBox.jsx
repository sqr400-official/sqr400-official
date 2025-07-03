import PropTypes from "prop-types";
import styles from "./SearchBox.module.css";

const SearchBox = ({query, setQuery}) => {

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

SearchBox.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired
};

export default SearchBox;
