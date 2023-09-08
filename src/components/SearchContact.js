import React, { Component } from "react";
import PropTypes from 'prop-types';
import {
    FormContainerDiv,
    Label,
    Input,
} from "./FormStyled.js";

export class SearchContact extends Component {
 
  findContact = (event) => {
    this.props.onChange({
      filter: event.target.value.toLowerCase(),
    });
  };

  render() {
    return (
      <FormContainerDiv>
        <Label>Search contact:</Label>
        <Input type="text" onChange={this.findContact} />
      </FormContainerDiv>
    );
  }
}
SearchContact.propTypes = {
    onChange: PropTypes.func.isRequired,
  };