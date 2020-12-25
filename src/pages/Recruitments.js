import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import NavResult from '../Components/NavResult';
import axios from 'axios';

const useStyles = makeStyles({
    table: {
        minWidth: 300
    },
});


export default function CustomizedTables() {

    const [value, setValue] = React.useState(0);
    const [rowTech, setTech] = React.useState([]);
    const [rowDes, setDes] = React.useState([]);
    const [rowMan, setMan] = React.useState([]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box p={3}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.any.isRequired,
        value: PropTypes.any.isRequired,
    };

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    function setRows(data) {
        console.log(data)
        let tec = [];
        let man = [];
        let des = [];
        for (var i = 0; i < data.length; i++) {
            switch (data[i][2]) {
                case 'Technical':
                    tec.push({ SNo: tec.length + 1, Name: data[i][1], RegNo: data[i][0] });
                    break;
                case 'Design':
                    des.push({ SNo: des.length + 1, Name: data[i][1], RegNo: data[i][0] });
                    break;
                case 'Management':
                    man.push({ SNo: man.length + 1, Name: data[i][1], RegNo: data[i][0] });
                    break;
                default:
                    break;
            }
        }
        setTech(tec);
        setMan(man);
        setDes(des);
    }

    const classes = useStyles();

    useEffect(() => {
        const getData = async () => {
            try {
                await axios.get('https://script.google.com/macros/s/AKfycbxRAtFddVR0f_zaCb82HS_r6HE6jcqsrDwfFA4vxegZmTd1goM/exec')
                    .then((res) => {
                        console.log(res);
                        setRows(res.data.data);
                    });
            } catch (error) {
                console.log(error);
            }
        }
        getData()
    }, [])

    return (
        <div className="result-table-parent">
            <NavResult />
            <div className="result-body">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Management" className="tab1" {...a11yProps(0)} />
                    <Tab label="Technical" {...a11yProps(1)} />
                    <Tab label="Design" {...a11yProps(2)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <TableContainer component={Paper} className="result-table table-container-color">
                        <Table stickyHeader className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>SNo</TableCell>
                                    <TableCell align="center">Name</TableCell>
                                    <TableCell align="center">RegNo</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rowMan.map((row) => (
                                    <TableRow key={row?.SNo} className="table-row">
                                        <TableCell component="th" scope="row" className="table-row">
                                            {row?.SNo}
                                        </TableCell>
                                        <TableCell align="center" className="table-row">{row?.Name}</TableCell>
                                        <TableCell align="center" className="table-row">{row?.RegNo}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <TableContainer component={Paper} className="result-table table-container-color">
                        <Table stickyHeader className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>SNo</TableCell>
                                    <TableCell align="center">Name</TableCell>
                                    <TableCell align="center">RegNo</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rowTech.map((row) => (
                                    <TableRow key={row?.SNo} className="table-row">
                                        <TableCell component="th" scope="row" className="table-row">
                                            {row?.SNo}
                                        </TableCell>
                                        <TableCell align="center" className="table-row">{row?.Name}</TableCell>
                                        <TableCell align="center" className="table-row">{row?.RegNo}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <TableContainer component={Paper} className="result-table table-container-color">
                        <Table stickyHeader className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>SNo</TableCell>
                                    <TableCell align="center">Name</TableCell>
                                    <TableCell align="center">RegNo</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rowDes.map((row) => (
                                    <TableRow key={row?.SNo} className="table-row">
                                        <TableCell component="th" scope="row" className="table-row">
                                            {row?.SNo}
                                        </TableCell>
                                        <TableCell align="center" className="table-row">{row?.Name}</TableCell>
                                        <TableCell align="center" className="table-row">{row?.RegNo}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </TabPanel>
            </div>
        </div>
    );
}


