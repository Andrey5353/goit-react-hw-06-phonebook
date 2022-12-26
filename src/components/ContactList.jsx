import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../redux';
import { Contacts } from './Contacts';
import css from './App.module.css';

export const ContactList = () => {
  const { contactList } = useSelector(getContacts);
  const filter = useSelector(getFilter);

  function getFiltredContacts() {
    if (!filter) {
      return contactList;
    }

    const normalizedFilter = filter.toLowerCase();

    return contactList.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }

  const visibleContacts = getFiltredContacts();

  return (
    <ul className={css.contactList}>
      {visibleContacts.map(contact => (
        <li className={css.contactItem} key={contact.id}>
          <Contacts contact={contact} />
        </li>
      ))}
    </ul>
  );
};
