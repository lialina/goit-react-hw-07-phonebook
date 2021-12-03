import React from 'react';
import { useState } from 'react';
import styles from './ContactForm.module.css';
import { createShortId } from '../../serviсes/shortId';
import ContactFormProps from '../../interfaces/ContactForm.interface';

export default function ContactForm({ onSubmit }: ContactFormProps) {
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });

  const nameInputId = createShortId();
  const numberInputId = createShortId();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit(contact,);

    reset();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    if (name === 'name' || name === 'number') {
      setContact({
        ...contact,
        [name]: value,
      });
    }
  };

  const reset = () => {
    setContact({
      name: '',
      number: '',
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor={nameInputId}>
        Name{' '}
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
          id={nameInputId}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={styles.label} htmlFor={numberInputId}>
        Number{' '}
        <input
          type="tel"
          name="number"
          value={contact.number}
          onChange={handleChange}
          id={numberInputId}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>

      <button className={styles.button} type="submit">
        Add contact
      </button>
    </form>
  );
}
