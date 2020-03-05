import React from "react";

import { TableButton } from "@Custom/Button/TableButton";
import { TablePagination } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

import { IEpisode } from "../../../types/episode";

export type Props = { columns: string[], rows: any[], topic: string };

const Datatable = (props: Props) => {

    const { rows } = props;
    const { columns } = props;
    const { topic } = props;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <>
            <TableContainer component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column: string, key: number) => (
                                <TableCell key={key} align="center">{column}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((episode: IEpisode, key: number) => (
                            <TableRow key={key}>
                                {Object.values(episode).map((value: any, key: number) => (
                                    <TableCell key={key} align="center" component="th" scope="row">
                                        {(key + 1) !== Object.keys(episode).length && value}
                                        {(key + 1) === Object.keys(episode).length &&
                                            <TableButton variant="contained" color="primary" href={`${topic}/${value}`}>Read More</TableButton>}
                                    </TableCell>
                                ))}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </>
    );
};

export default Datatable;