import React, {useEffect, useState} from "react";

import {TableButton} from "@Custom/Button/TableButton";
import {TablePagination} from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import {IEpisode} from "@Types/episode";
import {GenericFilter} from "@Components/Common/Filter";
import {CustomContainerDatatable} from "@Custom/Container";

export type Props = { columns: string[], rows: any[], topic: string, filter: string[], state: any, getTopic: any};

const Datatable = (props: Props) => {

    const {rows, columns, topic, filter, state, getTopic} = props;
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);
    const [filteredRows, setFilteredRows] = useState(getTopic(state) as any[]);

    useEffect(() => {
        setFilteredRows(getTopic(state));
    }, [getTopic(state)]);


    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <CustomContainerDatatable>
            <GenericFilter setTopics={setFilteredRows} allTopics={rows}
                           filterOptions={filter} setPages={setPage} isFilterTable={true}/>
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
                        {filteredRows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((episode: IEpisode, key: number) => (
                            <TableRow key={key}>
                                {Object.values(episode).map((value: any, key: number) => (
                                    <TableCell key={key} align="center" component="th" scope="row">
                                        {(key + 1) !== Object.keys(episode).length && value}
                                        {(key + 1) === Object.keys(episode).length &&
                                        <TableButton variant="contained" color="primary" href={`/${topic}/${value}`}>Read
                                            More</TableButton>}
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
                count={filteredRows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </CustomContainerDatatable>
    );
};

export default Datatable;