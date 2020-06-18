import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Treatment } from "./Treatment"
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@material-ui/core"

const useStyles = makeStyles((theme: any) => ({
  table: {
    minWidth: 650,
  },
  title: {
  }
}));

const rows = Treatment.getData()

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Typography variant="h3" className={classes.title}>
        Reporte
      </Typography>

      <br />

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
            {rows.map((treatment: Treatment) => (
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
  );
}

export default App;
