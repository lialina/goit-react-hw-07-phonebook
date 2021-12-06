import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact, getContacts } from '../../redux/actions';
import { deleteContactService } from '../../serviсes/deleteContactService';
import * as phonebookSelectors from '../../redux/selectors';

export default function ContactList({ contactsData }) {
  const dispatch = useDispatch();
  const error = useSelector(phonebookSelectors.error);
  const buttonName = 'Delete';

  const deleteContactClick = async id => {
    const deleteAction = await dispatch(deleteContact(id));
    const response = deleteAction.payload;
    if (deleteContactService(response)) {
      dispatch(getContacts());
    }
  };

  return (
    <>
      {error && <h2>{error}</h2>}
      <ul className={styles.list}>
        {contactsData.map(({ id, name, number }) => (
          <li className={styles.item} key={id}>
            <p className={styles.name}>{name}</p>
            <p className={styles.number}>{number}</p>
            <button
              className={styles.button}
              onClick={() => deleteContactClick(id)}
            >
              {buttonName}
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

ContactList.propTypes = {
  contactsData: PropTypes.array,
};
