import React, { useState, useEffect } from "react";
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, Theme } from "@material-ui/core/styles";
import { Paper, InputBase } from "@material-ui/core"
import { Treatment } from "./Treatment";

interface ISearchbarProps {
  setData: any;
  data: Treatment[];
  searchKey: string;
}

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

export function SearchBar({ setData, data, searchKey }: ISearchbarProps) {
  const [ searchBarkey, setSearchBarKey ] = useState(searchKey)

  // Functions.
  async function filterData(text: string) {
    let filtered: Treatment[] =
      data.filter((treatment: Treatment) => treatment.idCard === text) 

    await setData(filtered);
    setSearchBarKey(text);
  }

  // Lifcycle.
  useEffect(() => { filterData(searchKey) }, [searchKey])

  const classes = useStyles();
  return (
    <Paper component="form" className={classes.root}>
      <InputBase
        className={classes.input}
        value={searchBarkey}
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
