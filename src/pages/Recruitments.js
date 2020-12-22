import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
];

function createData(name, code) {
    return { name, code };
}

const rows = [
    createData('India', 'IN'),
    createData('China', 'CN'),
    createData('Italy', 'IT'),
    createData('United States', 'US'),
    createData('Canada', 'CA'),
    createData('Australia', 'AU'),
    createData('Germany', 'DE'),
    createData('Ireland', 'IE'),
    createData('Mexico', 'MX'),
    createData('Japan', 'JP'),
    createData('France', 'FR'),
    createData('United Kingdom', 'GB'),
    createData('Russia', 'RU'),
    createData('Nigeria', 'NG'),
    createData('Brazil', 'BR'),
];

const useStyles = makeStyles({
    root: {
        width: '30%',
    },
    container: {
        maxHeight: 440,
    },
});

export default function Recruitments() {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [trows, setTRows] = React.useState(rows);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    return (
        <Paper className={classes.root}>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {trows.slice(page * 10, page * 10 + 10).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10]}
                component="div"
                count={trows.length}
                rowsPerPage={10}
                page={page}
                onChangePage={handleChangePage}
            />
        </Paper>
    );
}
