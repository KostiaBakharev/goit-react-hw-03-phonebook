import css from './ContactsList.module.css';

const ContactsList = ({ items, onDelete }) => {
  const elements = items.map(({ id, name, number }) => (
    <li className={css.item} key={id}>
      {name}: {number}{' '}
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  ));
  return <ul className={css.list}>{elements}</ul>;
};
export default ContactsList;
