import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';


export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: ''
    };

    closeForm = this.props.closeForm;

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    // Handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, occupation, city, bio } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio };

        switch (step) {
            case 1:
                return (
                    <>
                        <DialogContent>
                            <FormUserDetails
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                                values={values}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.closeForm} color="primary" autoFocus>
                                Close
                            </Button>
                            <Button onClick={this.nextStep} color="primary" autoFocus>
                                Continue
                            </Button>
                        </DialogActions>
                    </>
                );
            case 2:
                return (
                    <>
                        <DialogContent>
                            <FormUserDetails
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                                values={values}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.prevStep} color="primary" autoFocus>
                                Go Back 
                            </Button>
                            <Button onClick={this.nextStep} color="primary" autoFocus>
                                Continue
                            </Button>
                        </DialogActions>
                    </>
                );
            case 3:
                return (
                    <>
                        <DialogContent>
                            <FormUserDetails
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                                values={values}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.prevStep} color="primary" autoFocus>
                                Go Back
                            </Button>
                            <Button onClick={this.nextStep} color="primary" autoFocus>
                                Continue
                            </Button>
                        </DialogActions>
                    </>
                );
            case 4:
                return (
                    <>
                        <DialogContent>
                            <FormUserDetails
                                nextStep={this.nextStep}
                                handleChange={this.handleChange}
                                values={values}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.prevStep} color="primary" autoFocus>
                                Go Back
                            </Button>
                            <Button onClick={this.closeForm} color="primary" autoFocus>
                                Confirm
                            </Button>
                        </DialogActions>
                    </>
                );
        }
    }
}

export default UserForm;