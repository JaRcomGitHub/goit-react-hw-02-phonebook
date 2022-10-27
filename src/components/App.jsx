import React, { Component } from "react";
import Phonebook from "./Phonebook";
import ContactList from "./ContactList";
import initialContacts from './contacts.json'

class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
    name: '',
    number: '',
  }

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const { contacts } = this.state;
    return (
      <>
        <Phonebook />
        <ContactList contacts={ contacts } onDeleteContact={this.deleteContact} />
      </>
    );
  }
}

export default App;