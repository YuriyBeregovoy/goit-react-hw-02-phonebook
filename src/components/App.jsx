import { Component } from "react"
import { nanoid } from 'nanoid'

export class App extends Component {
  loginInputId = nanoid();
  
state = {
  contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
  ],
  filter: '',
  name: '',
  number: ''
}
  
  handleNameSet = e => {
    e.preventDefault();
    const { name, number } = e.currentTarget.elements;
    const newContact = { id: nanoid(), name: name.value, number: number.value, };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact], 
      name: '',
      number: ''
    }));
     e.currentTarget.reset();
  }


filterContacts = () => {
  const { contacts, filter } = this.state;
   return  contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  
};

  

  render() {

    return (<div>
      <h1>Phonebook</h1>
      <form onSubmit={this.handleNameSet}>
      <label htmlFor={this.loginInputId}>
          <span>Name</span>
          <input
        id={this.loginInputId}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={this.state.name} 
        onChange={e => this.setState({ name: e.target.value })}
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
        value={this.state.number} 
        onChange={e => this.setState({ number: e.target.value })}
          />
        </label>
       <button type="submit">Add contact</button>
      </form>

      <h2>Contacts</h2>

      <label>
          <span>Find contacts by name</span>
          <input
        type="text"
        value={this.state.filter} 
        onChange={e => this.setState({ filter: e.target.value })}
          />
        </label>
      
        <ul>
        {this.filterContacts().map(contact => (
          <li key={contact.id}>{contact.name}: {contact.number}</li> 
          ))}
        </ul>
</div>
  );}
};
