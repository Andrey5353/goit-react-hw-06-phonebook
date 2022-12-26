import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import css from './App.module.css';

export default function App() {
  return (
    <main className={css.phonebook}>
      <section className={css.phonebookWrap}>
        <h1 className={css.phonebookTitle}>Phonebook</h1>
        <ContactForm />
      </section>

      <section className={css.contactsWrap}>
        <h2 className={css.phonebookTitle}>Contacts</h2>
        <Filter />
      </section>

      <ContactList />
    </main>
  );
}
