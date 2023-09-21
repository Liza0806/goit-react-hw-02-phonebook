import React, { useState, useEffect } from "react";
import { nanoid } from 'nanoid'
import { ContactsRender } from "./ContactRender/ContactsRender";
import { SearchContact} from "./SearchContact"
import { Form } from "./Form/Form";


export const App = () => { 

  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(storedContacts);
  
   if (parsedContacts && Array.isArray(parsedContacts)) {
    
     return parsedContacts
    }
    else {return []}
  });

  const [filter, setFilter] = useState('');

useEffect(()=>{
  localStorage.setItem("contacts", JSON.stringify(contacts));
  
}, [contacts])


const filteredContacts = () => {
    if (filter.length !== 0){
    return contacts.filter((contact) =>
     contact.name.toLowerCase().includes(filter.toLowerCase()))}
     else {
     return contacts
     }}

const formSubmitHandler = (name, number) =>{
  const newContact = {
    id: nanoid(), name: name, number: number
  } 
    setContacts([...contacts, newContact])
 
  };

  
const searchHendler = data =>{
  setFilter(data.filter)

}


const handleDeleteContact = (id) => {

    const filteredContacts = contacts.filter(contact => contact.id !== id)
   setContacts(filteredContacts);
 // localStorage.setItem("contacts", JSON.stringify(contacts));
};
const isNameUnique = (name) => {
  return contacts.find((contact) => contact.name.toLowerCase() === name.toLowerCase());
};
  return (
  <div style={{ width: '400px', margin: '0 auto',padding: '10px', border: '1px solid blue' }}>

      <Form onSubmit={formSubmitHandler} isUnic={isNameUnique}/>
      
      <SearchContact onChange={searchHendler}/>
     <ContactsRender contacts={filteredContacts()} onDeleteContact={handleDeleteContact} />
 
    </div>
  );
};
