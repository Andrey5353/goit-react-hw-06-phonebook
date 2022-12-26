import { useDispatch } from 'react-redux';
import { filterContacts } from '../redux';
import css from './App.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  function onFilterChange(event) {
    const name = event.currentTarget.value;
    dispatch(filterContacts(name));
  }

  return (
    <div className={css.form}>
      <label className={css.formLabel}>
        Find contacts by name
        <input
          className={css.formInput}
          name="filter"
          onChange={onFilterChange}
        ></input>
      </label>
    </div>
  );
};
