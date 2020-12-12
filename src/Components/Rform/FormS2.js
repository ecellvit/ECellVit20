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
          onChange={handleChange('phone')}
          defaultValue={values.phone}
          margin="normal"
          fullWidth
        />
        <br />
        <TextField
          placeholder="Enter your WhatsApp Number"
          label="WhatsApp Number"
          onChange={handleChange('whatsapp')}
          defaultValue={values.whatsapp}
          margin="normal"
          fullWidth
        />
      </>
    );
  }
}

  export default FormS2;