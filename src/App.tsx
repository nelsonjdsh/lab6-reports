import React, { useState, useEffect } from 'react';
import { Treatment } from "./Treatment";
import { ReportTable } from "./ReportTable";
import { SearchBar } from "./SearchBar";
import { ReportTitle } from "./ReportTitle";
import { CssBaseline, Container, Divider } from "@material-ui/core";
import { AddTreatmentForm } from "./AddTreatmentForm";
import AssessmentIcon from "@material-ui/icons/Assessment";

async function getDataFromDatabase(setTreatments: any, setMatches: any) {
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
  setMatches(treatments);
}

function App() {
  // State.
  const [ treatments, setTreatments ] = useState([] as Treatment[])
  const [ matches, setMatches ] = useState([] as Treatment[]);

  // Fetching data.
  useEffect(() => { getDataFromDatabase(setTreatments, setMatches) }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" fixed={false}>
        <br />

        <AddTreatmentForm />

        <br />

        <br />

        <Divider />

        <br />

        <ReportTitle
          title="Reporte de Tratamientos"
          icon={AssessmentIcon}
          color="#404040" />

        <br />
        
        <SearchBar setData={setMatches} data={treatments}/>

        <br />

        <ReportTable treatmentList={matches.length > 0 ? matches : treatments }/>
      </Container>
    </React.Fragment>
  );
}

export default App;
