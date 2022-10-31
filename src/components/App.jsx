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
    // name: '',
    // number: '',
  };

  deleteContact = (contactId) => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };
  
  formSubmitHandler = data => {
    console.log(data);
    // this.state.contacts.push(data);
    console.log([      ...this.state.contacts, data    ]);
    this.setState(prevState => ([
      ...prevState.contacts, data
    ]));
    console.log(this.state.contacts);
  };

  render() {
    const { contacts } = this.state;
    console.log(contacts);
    return (
      <div style={{ margin: '12px' }}>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />{/* <ContactForm ... /> */}

        <h2>Contacts</h2>
        <Filter />        {/* <Filter ... /> */}
        <ContactList contacts={contacts} onDeleteContact={this.deleteContact} />
      </div>
    );
  };
};

export default App;