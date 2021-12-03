import React from 'react';
import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { deleteContact, getContacts } from '../../redux/actions';
import { deleteContactService } from '../../serviсes/deleteContactService';
import * as phonebookSelectors from '../../redux/selectors';
import { useAppDispatch } from '../../redux/store'
import ContactListProps from '../../interfaces/ContactList.interface';

export default function ContactList({ contactsData }: ContactListProps) {
  const dispatch = useAppDispatch();
  const error = useSelector(phonebookSelectors.error);

  const deleteContactClick = async (id: string) => {
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
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}