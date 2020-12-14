import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import DarkBg from '../Components/DarkBg';
import UserForm from '../Components/formDialog';
import { Dialog, Snackbar, Typography } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

function Register() {

    const [open, setOpen] = React.useState(false);
    const [snackopen, setSnackOpen] = React.useState(false);
    const [snackopen2, setSnackOpen2] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSnack = () => {
        setSnackOpen(true);
    }

    const handleSnack2 = () => {
        setSnackOpen2(true);
    }
    const handleSnackClose = () => {
        setSnackOpen(false)
    }

    const handleSnack2Close = () => {
        setSnackOpen2(false)
    }

    const about = "We at ECell-VIT are looking for students with the best entrepreneurial mindset. The question is-  Have you got it?";
    const button =
        (
            <>
                {about}
                <button className="redirectbtn" onClick={handleClickOpen}>
                    Recruitment Form
                </button>
            </>
        );

    return (
        <span id="register">
            <DarkBg id="register" head="Recruitments" content={button} />
            <Dialog
                fullScreen={fullScreen}
                open={open}
                maxWidth='sm'
                fullWidth={true}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title">
                <Typography
                    variant='h5'
                    align='center'
                    className='typo'
                    children='Recruitment Form'
                />
                <UserForm closeForm={handleClose} snackHandle={handleSnack} snackHandle2={handleSnack2}/>
            </Dialog>
            <Snackbar open={snackopen} autoHideDuration={6000} onClose={handleSnackClose} >
                <Alert severity="success" onClose={handleSnackClose}>
                    Successfully Submitted!
                    We will contact you soon
                </Alert>
            </Snackbar>
            <Snackbar open={snackopen2} autoHideDuration={6000} onClose={handleSnack2Close} >
                <Alert severity="error" onClose={handleSnack2Close}>
                    Some or all fields are empty! Please fill all the required fields.
                </Alert>
            </Snackbar>
        </span>
    );
}

export default Register;