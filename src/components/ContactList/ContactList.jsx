// import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import // addContactsActions,
// contactsReducer,
// delContactsActions,
'redux/sliceContact';
import { delContactsThunk } from 'redux/contactsThunk';
// import { contactsReducer } from 'redux/sliceContact';

export const ContactList = ({ listContact }) => {
  // const listContact = contactsReducer.items;
  // console.log(listContact);
  const dispatch = useDispatch();
  return listContact.map(cont => {
    return (
      <p key={cont.id} className={css.listItem}>
        <span className={css.phone}>
          {cont.name}: {cont.phone}
        </span>
        <button
          className={css.btn}
          type="button"
          onClick={() => {
            dispatch(delContactsThunk(cont.id));
          }}
        >
          Delete
        </button>
      </p>
    );
  });
};

// ContactList.propTypes = {
//   listContact: PropTypes.array.isRequired,
// };
