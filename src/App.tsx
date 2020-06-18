import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { Treatment } from "./Treatment"
import { 
  Avatar,
  InputBase,
  CssBaseline,
  Container,
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper } from "@material-ui/core"
import AssessmentIcon from '@material-ui/icons/Assessment';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme: Theme) => ({
  table: {
    minWidth: 650,
  },
  titleSection: {
    marginTop: "0.3em"
  },
  avatar: {
    width: "50px",
    height: "50px"
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  title: {
  }
}));


const rows = Treatment.getData()

function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" fixed={false}>
        {/* Title */} 
        <Box 
          display="flex"
          flexDirection="row"
          justifyItems="center"
          className={classes.titleSection}>
          <Box alignSelf="center">
            <Avatar className={classes.avatar}>
              <AssessmentIcon width={40}/>
            </Avatar>
          </Box>
          <Box p={2}>
            <Typography variant="h4" className={classes.title}>
              Reporte de Tratamientos
            </Typography>
          </Box>
        </Box>

        <br />

        {/* Search bar */}
        <Paper component="form" className={classes.root}>
          <InputBase
            className={classes.input}
            placeholder="Buscar por cédula"
              inputProps={{ 'aria-label': 'Buscar con un algoritmo' }}
          />
          <IconButton type="submit" className={classes.iconButton} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>

          <br />
        {/* Table */} 
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
      </Container>
    </React.Fragment>
  );
}

export default App;
