import { useState } from 'react';
import shortid from 'shortid';
import s from './ContactForm.module.css';

export default function ContactForm({ onSubmit }) {
  const [contact, setContact] = useState({
    name: '',
    number: '',
  });
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleSubmit = event => {
    event.preventDefault();

    onSubmit({
      contact,
    });

    reset();
  };

  const handleChange = event => {
    const { value, name } = event.target;
    if (name === 'name' || name === 'number') {
      setContact({
        ...contact,
        [name]: value,
      });
    }

    // if () {
    //   setNumber(event.currentTarget.value);
    // }
  };

  const reset = () => {
    setContact({
      name: '',
      number: '',
    });
  };

  return (
    <form className={s.form} onSubmit={handleSubmit}>
      <label className={s.label} htmlFor={nameInputId}>
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
      <label className={s.label} htmlFor={numberInputId}>
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

      <button className={s.button} type="submit">
        Add contact
      </button>
    </form>
  );
}

// class ContactForm extends Component {
//   state = {
//     name: "",
//     number: "",
//   };

//   nameInputId = shortid.generate();
//   numberInputId = shortid.generate();

//   handleChange = (event) => {
//     const { name, value } = event.currentTarget;

//     this.setState({
//       [name]: value,
//     });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     this.props.onSubmit({
//       name: this.state.name,
//       number: this.state.number,
//     });

//     this.reset();
//   };

//   reset = () => {
//     this.setState({
//       name: "",
//       number: "",
//     });
//   };

//   render() {
// return (
//   <form className={s.form} onSubmit={this.handleSubmit}>
//     <label className={s.label} htmlFor={this.nameInputId}>
//       Name{" "}
//       <input
//         type="text"
//         name="name"
//         value={this.state.name}
//         onChange={this.handleChange}
//         id={this.nameInputId}
//         pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//         title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//         required
//       />
//     </label>
//     <label className={s.label} htmlFor={this.numberInputId}>
//       Number{" "}
//       <input
//         type="tel"
//         name="number"
//         value={this.state.number}
//         onChange={this.handleChange}
//         id={this.numberInputId}
//         pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//         title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//         required
//       />
//     </label>

//     <button className={s.button} type="submit">
//       Add contact
//     </button>
//   </form>
// );
//   }
// }
