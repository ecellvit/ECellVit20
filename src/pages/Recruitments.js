import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
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


function createData(SNo, Name, RegNo) {
    return { SNo, Name, RegNo };
}

const rows = [
    createData(1, 'Vinamra Khoria', '19BCE5678'),
    createData(2, 'Mayank Jain', '19BCE0469'),
    createData(3, 'Mayank Jain', '19BCE0469'),
];

const useStyles = makeStyles({
    table: {
        minWidth: 300,
    },
});


export default function CustomizedTables() {

    const [value, setValue] = React.useState(0);

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

    const classes = useStyles();

    return (
        <div className="result-table-parent">
            <div className="result-table-parent"><NavResult></NavResult></div>
            {/* <div className="result-navbar">Result Page</div> */}
            <div className="result-body">
                <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" className="tab-styling">
                    <Tab label="M" className="tab1" {...a11yProps(0)} />
                    <Tab label="T" {...a11yProps(1)} />
                    <Tab label="D" {...a11yProps(2)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <div className="result-table-div">
                        <TableContainer component={Paper} className="result-table table-container-color">
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell size='small'>SNo</TableCell>
                                        <TableCell align="center" size='small'>Name</TableCell>
                                        <TableCell align="center" size='small'>RegNo</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.SNo} className="table-row">
                                            <TableCell component="th" scope="row" className="table-row">
                                                {row.SNo}
                                            </TableCell>
                                            <TableCell align="center" className="table-row">{row.Name}</TableCell>
                                            <TableCell align="center" className="table-row">{row.RegNo}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div className="result-table-div">
                        <TableContainer component={Paper} className="result-table">
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell size='small'>SNo</TableCell>
                                        <TableCell align="center" size='small'>Name</TableCell>
                                        <TableCell align="center" size='small'>RegNo</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.SNo}>
                                            <TableCell component="th" scope="row">
                                                {row.SNo}
                                            </TableCell>
                                            <TableCell align="center">{row.Name}</TableCell>
                                            <TableCell align="center">{row.RegNo}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div className="result-table-div">
                        <TableContainer component={Paper} className="result-table">
                            <Table className={classes.table} aria-label="customized table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell size='small'>SNo</TableCell>
                                        <TableCell align="center" size='small'>Name</TableCell>
                                        <TableCell align="center" size='small'>RegNo</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow key={row.SNo}>
                                            <TableCell component="th" scope="row">
                                                {row.SNo}
                                            </TableCell>
                                            <TableCell align="center">{row.Name}</TableCell>
                                            <TableCell align="center">{row.RegNo}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                </TabPanel>
            </div>
        </div>
    );
}


