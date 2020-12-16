import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

export class FormS1 extends Component {
    render() {
        const { values, handleChange } = this.props;
        return (
            <>
                <TextField
                    placeholder="Enter Your Name"
                    label="Name"
                    error={values.errors.name}
                    helperText={values.errors.name && "This field cannot be empty"}
                    onChange={handleChange('name')}
                    defaultValue={values.name}
                    margin="normal"
                    fullWidth
                    required
                />
                <br />
                <TextField
                    placeholder="Enter Your Registration Number"
                    error={values.errors.regNo}
                    helperText={values.errors.regNo && "Enter a valid Registration number like 00XXX0000"}
                    label="RegNo"
                    onChange={handleChange('regNo')}
                    defaultValue={values.regNo}
                    margin="normal"
                    fullWidth
                    required
                />
                <br />
                <TextField
                    placeholder="Enter Your VIT Email-ID"
                    error={values.errors.email}
                    helperText={values.errors.email && "Enter a valid vit student mail like name2020@vitstudent.ac.in"}
                    label="VIT Email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                    margin="normal"
                    fullWidth
                    required
                />
                <br />
            </>
        );
    }
}

export default FormS1;