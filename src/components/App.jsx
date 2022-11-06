import React, { Component } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import initialContacts from './contacts.json'
import Filter from "./Filter"

class App extends Component {
  state = {
    // contacts: [],
    contacts: initialContacts,
    filter: '',
  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  
  formSubmitHandler = data => {
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data]
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normolizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normolizedFilter)
    );
  }

  render() {
    const { contacts, filter } = this.state;
    const filteredContacts = this.getFilteredContacts();

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm contacts={contacts} onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        {contacts.length > 0  &&
          <Filter
            value={filter}
            onChange={this.changeFilter} />
        }
        {filteredContacts.length > 0 &&
          <ContactList
            contacts={filteredContacts}
            onDeleteContact={this.deleteContact} />
        }
      </div>
    );
  };
};

export default App;