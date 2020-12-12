import React, { useEffect, useState } from 'react';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import axios from 'axios';

export default function FormS3(props) {
  const { values, handleChange } = props;
  const [data, setData] = useState();
  const url = 'https://script.google.com/macros/s/AKfycbzSrlRIGOLVatQ9nxW9q06znXqtX4FCnXcefgqUVvUTU1TC647o/exec'
  useEffect(() => {
    const getData = async () => {
      try {
        await axios.get(url)
          .then((res) => {
            console.log(res);
            setData(res.data)
          });
      } catch (error) {
        console.log(error);
      }
    }
    getData()
  }, []);
  return (
    <>
      <FormControl style={{
        width: '100%',
      }}>
        <InputLabel id="gender">Gender</InputLabel>
        <Select
          labelId="gender"
          id="gender"
          value={values.gender}
          fullWidth
          style={{
            width: '100%'
          }}
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
        <InputLabel id="dept">Department</InputLabel>
        <Select
          labelId="dept"
          id="dept"
          value={values.dept}
          fullWidth
          onChange={handleChange('dept')}
        >
          <MenuItem value={'Management'}>Management</MenuItem>
          <MenuItem value={'Technical'}>Technical</MenuItem>
          <MenuItem value={'Design'}>Design</MenuItem>
        </Select>
      </FormControl>
      <br></br>
      <br></br>
      <FormControl style={{
        width: '100%',
      }}>
        <InputLabel id="preferredTime">Preferred Timeslot</InputLabel>
        <Select
          labelId="preferredTime"
          id="preferredTime"
          value={values.preferredTime}
          fullWidth
          onChange={handleChange('preferredTime')}
        >
          {data ?
            data.data.map(Slot => (
              <MenuItem value={Slot[0]}>{Slot[0]} {Slot[1]} </MenuItem>
            ))
            : <>
            </>
          }
        </Select>
      </FormControl>
      <br></br>
      <br></br>
    </>
  );

}