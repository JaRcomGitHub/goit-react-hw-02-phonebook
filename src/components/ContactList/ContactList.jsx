// import css from './ContactList.module.css'
// import PropTypes from 'prop-types';
import Contact from "./Contact";

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul>
            {contacts.map(({ id, name, number }) => (
                <Contact
                    key={id}
                    name={name}
                    number={number}
                    onDeleteContact={() => onDeleteContact(id)}
                /> 
            ))}
        </ul>
    );
}

export default ContactList;

// ContactList.propTypes = {
//     contacts: PropTypes.string.isRequired,
// };

