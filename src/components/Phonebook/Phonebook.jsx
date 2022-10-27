import React from "react";
import css from './Phonebook.module.css'

// import { nanoid } from 'nanoid'
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

class Phonebook extends React.Component {
    render() {
        return (
            <>
                <h1>Phonebook</h1>

                {/* <ContactForm ... /> */}
                <div className={css.input} style={{ border: '1px solid red' }}>
                    <p>Name</p>
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                    <p>Number</p>
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                    <p></p>
                    <button type='button'>Add contact</button>
                </div>

                <h2>Contacts</h2>

                {/* <Filter ... /> */}
                <p>Find contacts by name</p>
                <input
                    type="text"
                    name="name"
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                />
            </>
        );
    }
}

export default Phonebook;