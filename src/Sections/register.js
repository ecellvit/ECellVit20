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
    const [snackopen3, setSnackOpen3] = React.useState(false);
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

    const handleSnack3 = () => {
        setSnackOpen3(true);
    }
    const handleSnack3Close = () => {
        setSnackOpen3(false)
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
                <UserForm closeForm={handleClose}
                    snackHandleSuccess={handleSnack}
                    snackHandleError={handleSnack2}
                    snackHandleAlreadyExist={handleSnack3}
                />
            </Dialog>
            <Snackbar open={snackopen} autoHideDuration={6000} onClose={handleSnackClose} >
                <Alert severity="success" onClose={handleSnackClose}>
                    Successfully Submitted!
                    We will contact you soon
                </Alert>
            </Snackbar>
            <Snackbar open={snackopen2} autoHideDuration={6000} onClose={handleSnack2Close} >
                <Alert severity="error" onClose={handleSnack2Close}>
                    There was some error connecting. Retry submitting
                </Alert>
            </Snackbar>
            <Snackbar open={snackopen3} autoHideDuration={6000} onClose={handleSnack3Close} >
                <Alert severity="error" onClose={handleSnack2Close}>
                    You have already registered for this department
                </Alert>
            </Snackbar>
        </span>
    );
}

export default Register;