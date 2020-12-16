import { Button } from '@material-ui/core';
import React from 'react';
import axios from 'axios';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

export default function FormS4(props) {
    const { values, closeForm, snackSuccess, snackError } = props;
    const { executeRecaptcha } = useGoogleReCaptcha();

    const getRecaptcha = async () => {
        const token = await executeRecaptcha("submit_form");
        return token;
    }

    const submit = () => {
        const { name, email, gender, preferredTime, regNo, dept, whatsapp, phone, skillset, link } = values;

        getRecaptcha().then(async (token) => {
            console.log(token);
            const item = { name, email, gender, slot: preferredTime, regNo: regNo.toUpperCase(), dept, whatsapp, phone, skillset, link, captcha: token }

            try {
                await axios.post('https://infinite-fortress-17779.herokuapp.com/register', item)
                    .then((res) => {
                        console.log(res);
                        if (res.data.success) {
                            snackSuccess();
                            closeForm();
                        } else {
                            snackError(res.data.msg);
                        }
                    });
            } catch (error) {
                console.log(error);
            }
        })
        // }
    }

    return (
        <Button onClick={submit} color="primary" style={{ margin: 'auto', display: 'block' }} >Submit form</Button>
    );
}