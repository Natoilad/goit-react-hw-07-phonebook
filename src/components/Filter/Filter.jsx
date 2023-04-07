import css from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/sliceFilter';

export const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  return (
    <>
      <label htmlFor="">
        <span>Find contacts by name</span>
      </label>
      <input
        className={css.input}
        value={filter}
        onChange={evt => dispatch(filterContact(evt.currentTarget.value))}
        type="text"
        name="filter"
        placeholder="Find contacts by name"
      />
    </>
  );
};
