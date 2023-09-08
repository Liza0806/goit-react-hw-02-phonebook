import React, { Component} from "react";
import { nanoid } from 'nanoid'
import { ContactsRender } from "./ContactsRender";
import { SearchContact} from "./SearchContact"
import { Form } from "./Form";


export class App extends Component  { 

 state = {
      contacts: [
    {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
      ],
      filter: '',
    }
    

filteredContacts = () => {
    if (this.state.filter.length !== 0){
    return this.state.contacts.filter((contact) =>
     contact.name.toLowerCase().includes(this.state.filter.toLowerCase()))}
     else {
     return this.state.contacts
     }
   }

formSubmitHandler = data =>{
  const newContact = {
    ...data,
    id: nanoid()
  } 
  this.setState((prevState) => ({
    contacts: [...prevState.contacts, newContact],
  }));
}
    
searchHendler = data =>{
  this.setState(
 { filter: data.filter}
    
  );
}

handleDeleteContact = (id) => {
  this.setState(prevState => {
    return {
      contacts: prevState.contacts.filter(
        contact => contact.id !== id
      ),
    };
  });
};
      
  render (){
   
  return (
    <div>

      <Form onSubmit={this.formSubmitHandler} contacts={this.state.contacts}/>
      <SearchContact onChange={this.searchHendler}/>
     <ContactsRender contacts={this.filteredContacts()} onDeleteContact={this.handleDeleteContact} />
 
    </div>
  );}
};
