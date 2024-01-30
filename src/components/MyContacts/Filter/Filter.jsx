import css from './Filter.module.css';
import { Component } from 'react';

class Filter extends Component {
  state = {};
  render() {
    const { filter, onChange } = this.props;
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
  }
}
export default Filter;
