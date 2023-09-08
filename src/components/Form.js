import React, { Component } from "react";
import {
    FormContainer,
    Label,
    Input,
    SubmitButton
} from "./FormStyled.js";

export class Form extends Component {
    state = {
        name: '',
        number: '',
        filter: '',
    }

    handleChange = event =>{
        const {name, value} = event.currentTarget
        console.log(value)
        this.setState({[name]: value})
      }
    
    isNameUnique = (name) => {
        return this.props.contacts.find((contact) => contact.name === name);
      };
      
      handleSubmit = (e) => {
        e.preventDefault();
      
        const { name, number } = this.state;
      
        if (this.isNameUnique(name)) {
          alert(`${name}" is already in contacts`);
          return;
        }
      
        this.props.onSubmit({ name, number });
        this.reset();
      };

    reset =() => {
this.setState({ name: '',
number: ''})
    }

    render () {
        return (
            <FormContainer action="" onSubmit={this.handleSubmit}>

        <Label> Type name
        <Input
  type="text"
  name="name"
  value={this.state.name}
  onChange={this.handleChange}
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/> 
</Label>

<Label> Type tel
<Input
  type="tel"
  name="number"
  value={this.state.number}
  onChange={this.handleChange}
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
</Label>
<SubmitButton type="submit">
Add contact
</SubmitButton>
      </FormContainer>
        )
    }
}