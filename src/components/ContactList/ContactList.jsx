import PropTypes from 'prop-types';
import styles from './ContactList.module.css';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/actions';

export default function ContactList({ contactsData }) {
  const dispatch = useDispatch();

  const deleteContactClick = id => {
    dispatch(deleteContact(id));
  };

  return (
    <ul className={styles.list}>
      {contactsData.map(({ id, name, number }) => (
        <li className={styles.item} key={id}>
          <p className={styles.name}>{name}</p>
          <p className={styles.number}>{number}</p>
          <button className={styles.button} onClick={() => deleteContactClick(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  contactsData: PropTypes.array,
};
