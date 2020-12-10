import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

export class FormS2 extends Component {
  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <TextField
          placeholder="Enter Your First Name"
          label="First Name"
          onChange={handleChange('firstName')}
          defaultValue={values.firstName}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="Enter Your Registration Number"
          label="RegNo"
          onChange={handleChange('regNo')}
          defaultValue={values.regNo}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="Enter Your Last Name"
          label="Last Name"
          onChange={handleChange('lastName')}
          defaultValue={values.lastName}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="Enter Your VIT Email-ID"
          label="VIT Email"
          onChange={handleChange('email')}
          defaultValue={values.email}
          margin="normal"
          fullWidth
        />
        <br />
      </>
    );
  }
}

  export default FormS2;