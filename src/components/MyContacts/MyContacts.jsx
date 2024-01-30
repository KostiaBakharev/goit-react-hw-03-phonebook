import css from './MyContacts.module.css';
import { Component } from 'react';
import ContactsList from './ContactsList/ContactsList';
import PhonebookForm from './PhonebookForm/PhonebookForm';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';

class MyContacts extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const { name, number } = data;

    const isContactExists = this.state.contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );
    const isNumberExists = this.state.contacts.some(
      contact => contact.number === number
    );

    if (isContactExists || isNumberExists) {
      alert(
        `Контакт з таким ${
          isContactExists ? "ім'ям" : 'номером телефону'
        } вже існує`
      );
      return;
    }

    this.setState(({ contacts }) => {
      const newContact = {
        id: nanoid(),
        ...data,
      };
      return {
        contacts: [...contacts, newContact],
      };
    });
  };
  deleteContact = id => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilter = ({ target }) => {
    this.setState({ filter: target.value });
    console.log(target.value);
  };

  render() {
    const { contacts, filter } = this.state;
    const { addContact, handleFilter, deleteContact } = this;
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return (
      <div className={css.container}>
        <h1 className={css.title}>Phonebook</h1>
        <PhonebookForm onSubmit={addContact} />
        <h2 className={css.title}>Contacts</h2>
        <Filter filter={filter} onChange={handleFilter} />
        <ContactsList items={filteredContacts} onDelete={deleteContact} />
      </div>
    );
  }
}

export default MyContacts;
