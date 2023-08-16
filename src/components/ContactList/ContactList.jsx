import { ContactListItem } from "components/ContactListItem/ContactListItem"

export const ContactList = ({contacts, onContactDelete}) => {
  return <ul>
    {contacts.map(contact => (
      <ContactListItem contact={contact} onContactDelete={onContactDelete} />
          ))}
        </ul>
}