import { Component } from "react"
import { nanoid } from 'nanoid'

export class App extends Component {

state = {
  contacts: [],
  name: ''
}


  render() {
    return (<div>
      <h1>Phonebook</h1>
      <div>
        <h3>Name</h3>
        <input
      type="text"
      name="name"
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
        />
        <button type="button">Add contact</button>
      </div>
        <h2>Contacts</h2>
        <ul>
          <li></li>
        </ul>
</div>
  );}
};
