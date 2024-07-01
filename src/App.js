import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import ContactItem from './components/ContactItem'

import './App.css'

const initialContactsList = [
  {
    id: uuidv4(),
    name: 'Ram',
    mobileNo: 9999988888,
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: 'Pavan',
    mobileNo: 8888866666,
    isFavorite: true,
  },
  {
    id: uuidv4(),
    name: 'Nikhil',
    mobileNo: 9999955555,
    isFavorite: false,
  },

  {
    id: uuidv4(),
    name: 'Rakesh',
    mobileNo: 6303891725,
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: 'Harish',
    mobileNo: 701309702 * 2,
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: 'Dear',
    mobileNo: 9182325793,
    isFavorite: false,
  },
]

class App extends Component {
  state = {
    contactsList: initialContactsList,
    name: '',
    mobileNo: '',
  }

  onChangeName = event => {
    console.log(event.target.value)
    this.setState({name: event.target.value})
  }

  onChangeMobileNo = event => {
    this.setState({mobileNo: event.target.value})
  }

  onAddNewContact = event => {
    event.preventDefault()
    const {name, mobileNo} = this.state
    const newContact = {
      id: uuidv4(),
      name,
      mobileNo,
      isFavorite: false,
    }
    this.setState(prevState => ({
      contactsList: [...prevState.contactsList, newContact],
      name: '',
      mobileNo: '',
    }))
  }

  onTogglesFavorite = id => {
    this.setState(prevState => ({
      contactsList: prevState.contactsList.map(eachContact => {
        if (id === eachContact.id) {
          return {...eachContact, isFavorite: !eachContact.isFavorite}
        }
        return eachContact
      }),
    }))
  }

  render() {
    const {name, mobileNo, contactsList} = this.state
    return (
      <div className="app-container">
        <div className="responsive-container">
          <h1 className="heading">Contacts</h1>
          <form
            className="contact-form-container"
            onSubmit={this.onAddNewContact}
          >
            <input
              value={name}
              onChange={this.onChangeName}
              className="input"
              placeholder="Name"
            />
            <input
              className="input"
              value={mobileNo}
              onChange={this.onChangeMobileNo}
              placeholder="Mobile Number"
            />
            <button
              type="submit"
              className="button"
              onChange={this.addNewContact}
            >
              Add Contact
            </button>
          </form>
          <ul className="contacts-table">
            <li className="table-header">
              <p className="table-header-cell name-column">Name</p>
              <hr className="separator" />
              <p className="table-header-cell">Mobile Number</p>
            </li>
            {contactsList.map(eachContact => (
              <ContactItem
                key={eachContact.id}
                contactDetails={eachContact}
                onTogglesFavorite={this.onTogglesFavorite}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
