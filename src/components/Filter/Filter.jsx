import css from './Filter.module.css'
// import PropTypes from 'prop-types';

const Filter = () => {
    return (
        <div className={css.filterBlock}>
            {/* <Filter ... /> */}
            <p>Find contacts by name</p>
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </div>
    );
}

export default Filter;

// FeedbackOptions.propTypes = {
//     options: PropTypes.arrayOf(PropTypes.string).isRequired,
//     onLeaveFeedback: PropTypes.func.isRequired,
// };
