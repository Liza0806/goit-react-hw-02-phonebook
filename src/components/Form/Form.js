import React, { useState } from "react";
import {
    FormContainer,
    Label,
    Input,
    SubmitButton
} from "./Form.styled.jsx";

export const Form = ({onSubmit, isUnic}) => {
  
const [name, setName] = useState("");
const [number, setNumber] = useState("");
const handleChange = (event) => {
  const { name, value } = event.currentTarget;
  
  switch (name) {
    case 'name':
      setName(value);
      break;
    case 'number':
      setNumber(value);
      break;
    default:
      break;
  }
};
    
   
     const handleSubmit = (e) => {
        e.preventDefault();
        if (isUnic(name)) {
          alert(`${name}" is already in contacts`);
          reset();
          return;
        }
      
        onSubmit(name, number);
        reset();
      };

   const reset = () => {
setName("");
setNumber("")
    }
        return (
            <FormContainer action="" onSubmit={handleSubmit}>

        <Label> Type name
        <Input
  type="text"
  name="name"
  value={name}
  onChange={handleChange}
  pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required
/> 
</Label>

<Label> Type tel
<Input
  type="tel"
  name="number"
  value={number}
  onChange={handleChange}
  pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
</Label>
<SubmitButton type="submit">
Add contact
</SubmitButton>
      </FormContainer>
        )
    
}