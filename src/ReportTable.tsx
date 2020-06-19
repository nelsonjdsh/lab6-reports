import React from 'react';
import { Treatment } from "./Treatment";
import { makeStyles } from '@material-ui/core/styles';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@material-ui/core"

interface IReportTableProps {
  treatmentList: Treatment[];
}

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export function ReportTable({ treatmentList }: IReportTableProps) {
  const classes = useStyles();
  return (
    <React.Fragment>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell align="left">Cédula</TableCell>
                <TableCell align="left">Medicina</TableCell>
                <TableCell align="left">Cantidad</TableCell>
                <TableCell align="left">Enfermera</TableCell>
                <TableCell align="left">Doctor</TableCell>
                <TableCell align="left">Fecha de registro</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {treatmentList.map((treatment: Treatment) => (
                <TableRow key={treatment.id}>
                  <TableCell component="th" scope="row">
                    {treatment.id}
                  </TableCell>
                  <TableCell align="left">{treatment.idCard}</TableCell>
                  <TableCell align="left">{treatment.medicine}</TableCell>
                  <TableCell align="left">{treatment.quantity}</TableCell>
                  <TableCell align="left">{treatment.nurse}</TableCell>
                  <TableCell align="left">{treatment.doctor}</TableCell>
                  <TableCell align="left">{treatment.registrationDate!.toString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </React.Fragment>
  )
}
