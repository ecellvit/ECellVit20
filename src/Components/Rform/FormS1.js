import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';

export class FormS1 extends Component {
    render() {
        const { values, handleChange } = this.props;
        return (
            <>
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
                    placeholder="Enter Your Name"
                    label="Name"
                    onChange={handleChange('name')}
                    defaultValue={values.name}
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

export default FormS1;