import React from 'react';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import DarkBg from '../Components/DarkBg';
import UserForm from '../Components/formDialog';
import { Dialog, DialogTitle, Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';

function Register() {

    const [open, setOpen] = React.useState(false);
    const [snackopen, setSnackOpen] = React.useState(false);
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

    const handleSnackClose = () => {
        setSnackOpen(false)
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
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title">
                <DialogTitle>Recruitment Form</DialogTitle>
                <UserForm closeForm={handleClose} snackHandle={handleSnack} />
            </Dialog>
            <Snackbar open={snackopen} autoHideDuration={6000} onClose={handleSnackClose} >
                <Alert severity="success" onClose={handleSnackClose}>
                    Successfully Submitted!
                    We will contact you soon
                </Alert>
            </Snackbar>
        </span>
    );
}

export default Register;