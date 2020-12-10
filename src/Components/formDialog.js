import React, { Component } from 'react';
import FormS1 from './Rform/FormS1';
import FormS2 from './Rform/FormS2';
import FormS3 from './Rform/FormS3';
import FormS4 from './Rform/FormS4';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';

export class UserForm extends Component {
    state = {
        step: 1,
        name:'',
        email: '',
        gender:'',
        preferredTimeSlot:'',
        regNo: '',
        department:''
    };
    
    closeForm = this.props.closeForm;

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        if (step===3){
            // Fetch request here 
            console.log(this.state)
        }
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
        const { firstName, lastName, email, occupation, city, bio, regNo } = this.state;
        const values = { firstName, lastName, email, occupation, city, bio, regNo };

        switch (step) {
            case 1:
                return (
                    <div className="dialogue">
                        <DialogContent>
                            <FormS1
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
                    </div>
                );
            case 2:
                return (
                    <div className="dialogue">
                        <DialogContent>
                            <FormS2
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
                    </div>
                );
            case 3:
                return (
                    <div className="dialogue">
                        <DialogContent>
                            <FormS3
                                handleChange={this.handleChange}
                                values={values}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.prevStep} color="primary" autoFocus>
                                Go Back
                            </Button>
                            <Button onClick={this.nextStep} color="primary" autoFocus>
                                Submit
                            </Button>
                        </DialogActions>
                    </div>
                );
            case 4:
                return (
                    <div className="dialogue">
                        <DialogContent>
                            <FormS4
                                handleChange={this.handleChange}
                                values={values}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.closeForm} color="primary" autoFocus>
                                Close
                            </Button>
                        </DialogActions>
                    </div>

                );

                default:
                    return (
                      <></>
                    )
        }
    }
}

export default UserForm;