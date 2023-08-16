import { ItemButton } from "./ContactListItem.styled."

export const ContactListItem = ({ contact:{id, name, number}, onContactDelete}) => {
  return <li key={id}>
            <p>{name}: {number}</p>
            <ItemButton type="button" onClick={() => onContactDelete(id)}>Delete</ItemButton>
          </li> 
}