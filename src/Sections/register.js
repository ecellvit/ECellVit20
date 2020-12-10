import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import DarkBg from '../Components/DarkBg';
import UserForm from '../Components/formDialog';

function Register() {

    const [open, setOpen] = React.useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const about = "We at ECell-VIT are looking for students with the best entrepreneurial mindset. The question is-  Have you got it?";
    const button =
        (
            <div>
                {about}
                <button className="redirectbtn" onClick={handleClickOpen}>
                    Open responsive dialog
                </button>
            </div>
        );

    return (
        <span id="register">
            <DarkBg id="register" head="Recruitments" content={button} />
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title">
                <UserForm
                closeForm={handleClose}    
                />
            </Dialog>
        </span>
    );
}

export default Register;









