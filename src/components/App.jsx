import { Component } from "react"
import { nanoid } from 'nanoid'

export class App extends Component {
  loginInputId = nanoid();
  
state = {
  contacts: [],
  name: ''
}

  
  handleNameSet = e => {
    e.preventDefault();
    const { name } = e.currentTarget;
    console.log(this.state.contacts)
    const newContact = { id: nanoid(), name: name.value };
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContact], 
      name: '' 
    }));
     e.currentTarget.reset();
  }

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
       <button type="submit">Add contact</button>
      </form>
        <h2>Contacts</h2>
        <ul>
        {this.state.contacts.map(contact => (
            <li key={contact.id}>{contact.name}</li> 
          ))}
        </ul>
</div>
  );}
};
