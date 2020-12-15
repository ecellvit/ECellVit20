import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

export class FormS2 extends Component {
  render() {
    const { values, handleChange } = this.props;
    return (
      <>
        <TextField
          placeholder="Enter your phone Number"
          label="Phone Number"
          error={values.errors.phone}
          helperText={values.errors.phone && "Please enter a valid phone number"}
          onChange={handleChange('phone')}
          defaultValue={values.phone}
          margin="normal"
          fullWidth
          required
        />
        <br />
        <TextField
          placeholder="Enter your WhatsApp Number"
          label="WhatsApp Number"
          error={values.errors.whatsapp}
          helperText={values.errors.whatsapp && "Please enter a valid phone number"}
          onChange={handleChange('whatsapp')}
          defaultValue={values.whatsapp}
          margin="normal"
          fullWidth
          required
        />
      </>
    );
  }
}

export default FormS2;