import React, { useState, useEffect } from 'react';
import { Treatment } from "./Treatment";
import { ReportTable } from "./ReportTable";
import { SearchBar } from "./SearchBar";
import { ReportTitle } from "./ReportTitle";
import { CssBaseline, Container } from "@material-ui/core";
import { Agent } from "https";

async function getDataFromDatabase(setTreatments: any) {
  var response = await fetch(
    'https://localhost:5001/treatments',
    { 
      method: 'GET',
      mode: 'cors',
      cache: 'default',
      headers: new Headers({
        "Content-Type": 'application/json; charset=utf-8'
      })
    }
  );

  var treatments = await (response.json());

  setTreatments(treatments);
}

function App() {
  // State.
  const [ treatments, setTreatments ] = useState([] as Treatment[])

  // Fetching data.
  useEffect(() => { getDataFromDatabase(setTreatments) }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" fixed={false}>
        <ReportTitle />

        <br />
        
        <SearchBar />

        <br />

        <ReportTable treatmentList={treatments || []}/>
      </Container>
    </React.Fragment>
  );
}

export default App;
