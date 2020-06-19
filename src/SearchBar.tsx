import React, { useState } from "react";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Paper, InputBase } from "@material-ui/core"
import { Treatment } from "./Treatment";

const useStyles = makeStyles((theme: Theme) => ({
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
}));

interface ISearchbarProps {
  setData: any;
  data: Treatment[];
}


export function SearchBar({ setData, data }: ISearchbarProps) {
  const classes = useStyles();

  function filterData(searchKey: string) {
    let filtered: Treatment[] =
      data.filter((treatment: Treatment) => treatment.idCard === searchKey) 

    setData(filtered);
  }

  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        onChange={(e) => filterData(e.target.value)}
        placeholder="Buscar por cédula"
          inputProps={{ 'aria-label': 'Buscar con un algoritmo' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  ) 
}
