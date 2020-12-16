import React from 'react';
import { FormControl, Select, MenuItem, InputLabel, FormHelperText, Typography } from '@material-ui/core';

export default function FormS3(props) {
  const { values, handleChange } = props;
  return (
    <>
      <br />
      <FormControl
        style={{ width: '100%' }}
        error={values.errors.gender}
        required
      >
        <InputLabel id="gender">Gender</InputLabel>
        <Select
          labelId="gender"
          id="gender"
          value={values.gender}
          fullWidth
          style={{
            width: '100%'
          }}
          required
          onChange={handleChange('gender')}
        >
          <MenuItem value={'Male'}>Male</MenuItem>
          <MenuItem value={'Female'}>Female</MenuItem>
          <MenuItem value={'Other'}>Others</MenuItem>
        </Select>
        <FormHelperText>{values.errors.gender && "Please select a value"}</FormHelperText>
      </FormControl>
      <br></br>
      <br></br>
      <FormControl
        style={{ width: '100%' }}
        error={values.errors.dept}
        required
      >
        <InputLabel id="dept">Which Department would you like to join</InputLabel>
        <Select
          labelId="dept"
          id="dept"
          value={values.dept}
          fullWidth
          required
          onChange={handleChange('dept')}
        >
          <MenuItem value={'Management'}>Management</MenuItem>
          <MenuItem value={'Technical'}>Technical</MenuItem>
          <MenuItem value={'Design'}>Design</MenuItem>
        </Select>
        <FormHelperText>{values.errors.dept && "Please select a value"}</FormHelperText>
      </FormControl>
      <br />
      <Typography
        variant="body2"
        children={
          <span>If you wish to apply for any other domain, please fill the form again</span>
        }
      />
    </>
  );

}