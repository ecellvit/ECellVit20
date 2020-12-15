import React, { Component } from 'react';
import FormS1 from './Rform/FormS1';
import FormS2 from './Rform/FormS2';
import FormS3 from './Rform/FormS3';
import FormS4 from './Rform/FormS4';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { Typography } from '@material-ui/core';


export class UserForm extends Component {
    state = {
        step: 1,
        name: '',
        email: '',
        gender: '',
        preferredTime: '',
        regNo: '',
        dept: '',
        whatsapp: '',
        phone: '',
        skillset: '',
        dis: false,
        link: ''
    };

    url = 'https://script.google.com/macros/s/AKfycbzSrlRIGOLVatQ9nxW9q06znXqtX4FCnXcefgqUVvUTU1TC647o/exec'

    closeForm = this.props.closeForm

    // Proceed to next step
    nextStep = async () => {
        const { step, dis } = this.state;
        if (step === 4 && dis === false) {
            this.setState({
                dis: true,
            });

            const { name, email, gender, preferredTime, regNo, dept, whatsapp, phone, skillset, link } = this.state;

            if (name==='' || email==='' || gender==='' || regNo===''|| dept===''|| whatsapp===''|| phone==='' || skillset===''){
                this.props.snackHandle2() 
                this.setState({
                    dis: false
                })
                return; 
            }
            else if(dept==='Management' && preferredTime==='')
            {
                this.props.snackHandle2()
                this.setState({
                    dis: false
                })
                return;
            }

            const item = { name, email, gender, preferredTime, regNo, dept, whatsapp, phone, skillset, link }
            // Fetch request here 
            var form_data = new FormData();

            for (var key in item) {
                console.log(key, item[key])
                form_data.append(key, item[key]);
            }

            console.log(form_data.values())

            try {
                await axios.post(this.url, form_data)
                    .then((res) => {
                        console.log(res);
                        this.props.snackHandle();
                        this.props.closeForm();
                    });
            } catch (error) {
                console.log(error);
            }
        }
        else {
            this.setState({
                step: step + 1
            });
        }
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
        const { name, email, gender, preferredTime, regNo, dept, whatsapp, phone, skillset, link } = this.state;
        const values = { name, email, gender, preferredTime, regNo, dept, whatsapp, phone, skillset, link };

        switch (step) {
            case 1:
                return (
                    <div className="dialogue">
                        <Typography
                            variant='subtitle1'
                            align='center'
                            children={`Step ${step} of 4`}
                        />
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
                        <Typography
                            variant='subtitle1'
                            align='center'
                            children={`Step ${step} of 4`}
                        />
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
                        <Typography
                            variant='subtitle1'
                            align='center'
                            children={`Step ${step} of 4`}
                        />
                        <DialogContent>
                            <FormS3
                                handleChange={this.handleChange}
                                values={values}
                            />
                        </DialogContent>
                        <DialogActions
                        >
                            <Button onClick={this.prevStep} color="primary" autoFocus>
                                Go Back
                            </Button>
                            <Button onClick={this.nextStep} color="primary" autoFocus disabled={this.dis}>
                                Continue
                            </Button>
                        </DialogActions>
                    </div>
                );
            case 4:
                return (
                    <div className="dialogue">
                        <Typography
                            variant='subtitle1'
                            align='center'
                            children={`Step ${step} of 4`}
                        />
                        <DialogContent>
                            <FormS4
                                handleChange={this.handleChange}
                                values={values}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.prevStep} color="primary" autoFocus>
                                Go Back
                                </Button>
                            <Button onClick={this.nextStep} color="primary" autoFocus disabled={this.dis}>
                                Submit
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