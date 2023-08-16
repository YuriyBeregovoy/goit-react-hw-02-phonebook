export const ContactListItem = ({ contact:{id, name, number}, onContactDelete}) => {
  return <li key={id}>
            <p>{name}: {number}</p>
            <button type="button" onClick={() => onContactDelete(id)}>Delete</button>
          </li> 
}