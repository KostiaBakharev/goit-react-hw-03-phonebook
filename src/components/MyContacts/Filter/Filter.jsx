import css from './Filter.module.css';
const Filter = ({ filter, onChange }) => {
  return (
    <input
      className={css.filter}
      type="text"
      name="filter"
      placeholder="Search contacts..."
      value={filter}
      onChange={onChange}
    />
  );
};
export default Filter;
