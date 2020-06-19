import React from "react";
import AssessmentIcon from '@material-ui/icons/Assessment';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { 
  Avatar,
  Box,
  Typography, } from "@material-ui/core"

const useStyles = makeStyles((theme: Theme) => ({
  titleSection: {
    marginTop: "0.3em"
  },
  avatar: {
    width: "50px",
    height: "50px"
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

export function ReportTitle() {
  const classes = useStyles();
  return (
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
  )
}
