import css from './Contact.module.css'
// import PropTypes from 'prop-types';

const Contact = ({ name, number, onDeleteContact }) => {
    return (
        <li className={css.ContactListItem}>
            <p>{name}: <span>{number}</span></p>
            <button 
                type='button'
                className={css.ContactBtnDel}
                onClick={onDeleteContact}
            >Delete</button>
        </li>
    );
}

export default Contact;