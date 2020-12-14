import React, { useEffect, useState } from 'react';
import { FormControl, Select, MenuItem, InputLabel, TextField } from '@material-ui/core';
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
        <InputLabel id="dept">Department</InputLabel>
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
      {values.dept !== ''
        ? <TextField
          style={{ marginTop: 0, marginBottom: 4 }}
          placeholder="Your Interest/Abilities"
          label="Interest/Abilities"
          onChange={handleChange('skillset')}
          defaultValue={values.skillset}
          margin="normal"
          required
          helperText={values.dept === 'Technical' ? "We are looking for App or Web Developers Only" : "We want someone who knows Photoshop/Illustrator and Premier Pro/Final Cut Pro"}
          fullWidth
        />
        :
        <></>
      }
      {values.dept === 'Design' ?
        <TextField
          style={{ marginTop: 0, marginBottom: 4 }}
          placeholder="Add drive link"
          label="Drive Link"
          onChange={handleChange('link')}
          defaultValue={values.link}
          margin="normal"
          helperText={"Add drive link of any designs you have made"}
          fullWidth
        /> : <></>}
      <br></br>
      <br></br>
      {values.dept === 'Management'
        ?
        <FormControl style={{
          width: '100%',
        }}>
          <InputLabel id="preferredTime">Preferred Timeslot</InputLabel>
          <Select
            labelId="preferredTime"
            id="preferredTime"
            value={values.preferredTime}
            fullWidth
            required
            onChange={handleChange('preferredTime')}
          >
            {data?.data.map(Slot => (
              <MenuItem value={Slot[0]} disabled={Slot[1] === 0}>{Slot[0]} (Seats Left : {Slot[1]})</MenuItem>
            ))}
          </Select>
        </FormControl>
        : <></>
      }
      <br></br>
      <br></br>
    </>
  );

}