import React, { useEffect, useState } from 'react';
import { FormControl, Select, MenuItem, InputLabel, TextField, Typography, FormHelperText } from '@material-ui/core';
import axios from 'axios';

export default function FormS4(props) {
    const { values, handleChange } = props;
    const [data, setData] = useState();
    useEffect(() => {
        const getData = async () => {
            try {
                await axios.get('https://infinite-fortress-17779.herokuapp.com/allslots')
                    .then((res) => {
                        console.log(res.data.allslots);
                        setData(res.data.allslots)
                    });
            } catch (error) {
                console.log(error);
            }
        }
        if (values.dept === "Management")
            getData()
    }, [values]);
    return (
        <>
            {values.dept === 'Technical'
                ?
                <>
                    <Typography
                        variant="body1"
                        align="center"
                        children={
                            <strong>Technical</strong>
                        }
                    />
                    <TextField
                        style={{ marginTop: 0, marginBottom: 4 }}
                        placeholder="Your Interests/Abilities"
                        label="Interests/Abilities"
                        error={values.errors.skillset}
                        helperText={values.errors.skillset && "Mention any skills you possess"}
                        onChange={handleChange('skillset')}
                        value={values.skillset}
                        required
                        fullWidth
                    />
                    <br />
                    <TextField
                        style={{ marginTop: 0, marginBottom: 4 }}
                        placeholder="Your Github Link"
                        label="Github Link"
                        onChange={handleChange('link')}
                        value={values.link}
                        fullWidth
                        helperText="optional"
                    />
                    <br />
                    <br />
                    <Typography
                        variant="body2"
                        children={
                            <span>We are majorly looking for candidates with interest in <strong>Web/App Development</strong>
                                <br />
                                <br />
                            If you own a github account which you may want to share, please paste the <strong>Github Profile Link</strong> above (You are also welcome to share any other work which you may have done).
                            </span>
                        }
                    />
                </>
                :
                <></>
            }
            {values.dept === 'Design'
                ?
                <>
                    <Typography
                        variant="body1"
                        align="center"
                        children={
                            <strong>Design</strong>
                        }
                    />
                    <TextField
                        style={{ marginTop: 0, marginBottom: 4 }}
                        placeholder="Your Interests/Abilities"
                        label="Interests/Abilities"
                        error={values.errors.skillset}
                        helperText={values.errors.skillset && "Mention any skills you possess"}
                        onChange={handleChange('skillset')}
                        value={values.skillset}
                        required
                        fullWidth
                    />
                    <br />
                    <TextField
                        style={{ marginTop: 0, marginBottom: 4 }}
                        placeholder="Drive Link with your design work"
                        label="Drive Link"
                        onChange={handleChange('link')}
                        helperText="optional"
                        value={values.link}
                        fullWidth
                    />
                    <br />
                    <br />
                    <Typography
                        variant="body2"
                        children={
                            <span>We are looking for candidates with experience in either <strong>Photoshop/Illustrator</strong>, <strong>Premiere Pro/Final Cut Pro</strong>, <strong>Photography</strong> etc.
                            <br />
                                <br />
                            If you have any existing design work that you may want to share, please upload them to <strong>google drive</strong> and paste the link address above (Make sure the link is publicly accessible).
                            </span>
                        }
                    />
                </>
                :
                <></>
            }
            {values.dept === 'Management'
                ?
                <>
                    <Typography
                        variant="body1"
                        align="center"
                        children={
                            <strong>Management</strong>
                        }
                    />
                    <TextField
                        style={{ marginTop: 0, marginBottom: 4 }}
                        placeholder="Your Management Related Skills"
                        error={values.errors.skillset}
                        helperText={values.errors.skillset && "Mention any skills you possess"}
                        label="Skills"
                        onChange={handleChange('skillset')}
                        value={values.skillset}
                        required
                        fullWidth
                    />
                    <FormControl
                        style={{ width: '100%' }}
                        error={values.errors.preferredTime}
                    >
                        <InputLabel id="preferredTime">Preferred Timeslot *</InputLabel>
                        <Select
                            labelId="preferredTime"
                            id="preferredTime"
                            value={values.preferredTime}
                            fullWidth
                            required
                            onChange={handleChange('preferredTime')}
                        >
                            {data ? data.map(Slot => {
                                return <MenuItem value={Slot.slot} disabled={Slot.seats === 0}>{Slot.slot} (Seats Left : {Slot.seats})</MenuItem>
                            }) : <></>}
                        </Select>
                        <FormHelperText>{values.errors.preferredTime && "Please select the time slot wisely as changes won't be encouraged later. Incase of any discrepancies, contact the number given below"}</FormHelperText>
                    </FormControl>
                    <br />
                    <br />
                    <Typography
                        variant="body2"
                        children={
                            <span>You are free to share any additional skills that you may have such as <strong>editorial skills</strong> or <strong>Photography</strong>.</span>
                        }
                    />
                </> : <></>
            }
            {values.dept === ''
                ?
                <>
                    <Typography
                        variant="h6"
                        align="center"
                        children={
                            <strong>Please Choose your preferred department in Step 3</strong>
                        }
                    />
                </> : <></>
            }
        </>
    );

}