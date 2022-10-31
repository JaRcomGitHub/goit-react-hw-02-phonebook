import React from "react";
import css from './ContactForm.module.css'
import { nanoid } from 'nanoid';

// import { nanoid } from 'nanoid'
// model.id = nanoid() //=> "V1StGXR8_Z5jdHi6B-myT"

class ContactForm extends React.Component {
    state = {
        name: 'Name Names',
        number: '123-456-789',
    }

    nameInputId = nanoid();
    numberInputId = nanoid();

    // onAlert = name =>  {
    //     window.alert(`${name} is already in contacts.`);
    // }

    handleInputChange = event => {
        const { name, value } = event.currentTarget;
        this.setState({ [name]: value });
    }

    handleSubmit = event => {
        event.preventDefault();
        // this.props.onSubmit(this.state);
        this.props.onSubmit({ id: nanoid(), ...this.state });
        this.reset();
    }

    reset = () => {
        this.setState({
        name: '',
        number: '',
    });
    }

    render() {
        return (
            <form className={css.сontactForm} onSubmit={this.handleSubmit}>
                <label htmlFor={this.nameInputId}>
                    Name
                    <input
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handleInputChange}
                        id={this.nameInputId}
                    />
                </label>
                <label htmlFor={this.numberInputId}>
                    Number
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                        onChange={this.handleInputChange}
                         id={this.numberInputId}
                    />
                </label>
                <button
                    type='submit'
                    // onClick={() => this.onAlert("Vova") }
                >Add contact</button>
            </form>
        );
    }
}

export default ContactForm;