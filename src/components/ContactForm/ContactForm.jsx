export const ContactForm = ({addContactName, setNanoidId, onChangeName, onChangeNumber, nameInpytValue, numberIputValue }) => {
  return  <form onSubmit={addContactName}>
      <label htmlFor={setNanoidId}>
          <span>Name</span>
          <input
        id={setNanoidId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={nameInpytValue} 
        onChange={onChangeName}
          />
        </label>
        <label>
          <span>Number</span>
          <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={numberIputValue} 
        onChange={onChangeNumber}
          />
        </label>
       <button type="submit">Add contact</button>
      </form>
}