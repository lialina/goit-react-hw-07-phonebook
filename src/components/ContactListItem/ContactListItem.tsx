import styles from './ContactListItem.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact, getContacts } from '../../redux/actions';
import { deleteContactService } from '../../serviсes/deleteContactService';
import type { AppDispatch } from '../../redux/types';
import type { ContactData } from '../../types/ContactData';

export default function ContactListItem({id, name, number}: ContactData ) {
  const dispatch = useDispatch<AppDispatch>();
  
    const deleteContactClick = async (id: string) => {
    const deleteAction = await dispatch(deleteContact(id));
    const response = deleteAction.payload;
    if (deleteContactService(response)) {
      dispatch(getContacts());
    }
  };

  return (
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
  )
}