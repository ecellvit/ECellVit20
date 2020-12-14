import React from 'react';
import { FormControl, Select, MenuItem, InputLabel} from '@material-ui/core';

export default function FormS3(props) {
  const { values, handleChange } = props;
  return (
    <>
      <br />
      <FormControl style={{
        width: '100%',
      }}>
        <InputLabel id="gender">Gender *</InputLabel>
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
      </FormControl>
      <br></br>
      <br></br>   
      <FormControl style={{
        width: '100%',
      }}>
        <InputLabel id="dept">Department *</InputLabel>
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
      </FormControl>
      <br />


    </>
  );

}