import React from "react";
import PropTypes from 'prop-types';
import {
    FormContainerDiv,
    Label,
    Input,
} from "./Form/Form.styled.jsx";

export const SearchContact =({onChange}) => {
 
  const findContact = (event) => {
    onChange({
      filter: event.target.value.toLowerCase(),
    });
  };

  
    return (
      <FormContainerDiv>
        <Label>Search contact:</Label>
        <Input type="text" onChange={findContact} />
      </FormContainerDiv>
    );
  
}
SearchContact.propTypes = {
    onChange: PropTypes.func.isRequired,
  };