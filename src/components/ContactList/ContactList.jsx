export const ContactList = ({contacts, onContactDelete}) => {
  return <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <p>{contact.name}: {contact.number}</p>
            <button type="button" onClick={() => onContactDelete(contact.id)}>Delete</button>
          </li> 
          ))}
        </ul>
}