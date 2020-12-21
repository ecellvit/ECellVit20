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
    const [message, setMessage] = React.useState('');
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

    const handleSnack2 = (mes) => {
        setMessage(mes);
        setSnackOpen2(true);
    }
    const handleSnackClose = () => {
        setSnackOpen(false)
    }

    const handleSnack2Close = () => {
        setSnackOpen2(false)
    }

    const about = "One becomes a true entrepreneur when they persevere, learn and discover new opportunities. It's time to capitalize the chance to be a part of an exclusive community and open doors to the entrepreneurial sphere by registering down below.";
    const subhead =
        (
            <div style={{ textAlign: 'center' }}>
                {about}
                <button className="redirectbtn" onClick={handleClickOpen}>
                    Recruitment Form
                </button>
            </div>
        );

    return (
        <span id="register">
            <DarkBg id="register" head="Recruitments" content={subhead} />
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
                    {message}
                </Alert>
            </Snackbar>
        </span>
    );
}

export default Register;