import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { remove } from 'redux/sliceContact';

export const ContactList = ({ listContact }) => {
  const dispatch = useDispatch();
  return listContact.map(cont => {
    return (
      <p key={cont.id} className={css.listItem}>
        <span className={css.phone}>
          {cont.name}: {cont.number}
        </span>
        <button
          className={css.btn}
          type="button"
          onClick={() => {
            dispatch(remove(cont.id));
          }}
        >
          Delete
        </button>
      </p>
    );
  });
};

ContactList.propTypes = {
  listContact: PropTypes.array.isRequired,
};
