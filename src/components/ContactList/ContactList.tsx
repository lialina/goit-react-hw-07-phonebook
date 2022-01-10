import React from 'react';
import styles from './ContactList.module.css';
import { useSelector } from 'react-redux';
import * as phonebookSelectors from '../../redux/selectors';
import type { RootState } from '../../redux/types'
import type { ContactData } from '../../types/ContactData';
import ContactListItem from '../ContactListItem/ContactListItem'

interface ContactListProps {
  contactsData: ContactData[]
}

export default function ContactList({ contactsData }: ContactListProps) {
  const error = useSelector<RootState, string>(phonebookSelectors.error);

  return (
    <>
      {error && <h2>{error}</h2>}
      <ul className={styles.list}>
        {contactsData.map(({ id, name, number }) => (
          <ContactListItem key={id} id={id} name={name} number={number}/>
        ))}
      </ul>
    </>
  );
}