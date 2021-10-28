
import './App.css';
import AddContact from './components/AddContact/AddContact';
import React, { useState } from 'react'
import ContactsList from './components/ContactsList/ContactsList';
import CardContact from './components/CardContact/CardContact';

function App() {
  let [contacts, setContacts] = useState([])
  let [cardContact, setCardContact] = useState({})
  let [isCard, setIsCard] = useState(false)

  function handleNewContact(newContact) {
    let newContactsArray = [...contacts];
    newContactsArray.push(newContact);

    setContacts(newContactsArray)
  }

  function handleDeleteContact(id) {
    let newContactsArray = contacts.filter(item => {
      return item.id !== id
    })
    setContacts(newContactsArray)
  }

  function handleCardIndex(index) {
    setIsCard(true)
    setCardContact(contacts[index])

  }

  function handleSaveCartedContact(newContact) {
    let newContactsArray = contacts.map(item => {
      if (item.id === newContact.id) {
        return newContact
      }
      return item
    })
    setContacts(newContactsArray)
    setIsCard(false)
  }
  return (
    <div className="App">
      <AddContact
        handleNewContact={handleNewContact}
      />
      {isCard ? <CardContact
        cardContact={cardContact}
        handleSaveCartedContact={handleSaveCartedContact}
      /> : null}


      <ContactsList
        contacts={contacts}
        handleDeleteContact={handleDeleteContact}
        handleCardIndex={handleCardIndex}
      />


    </div>
  );
}

export default App;
