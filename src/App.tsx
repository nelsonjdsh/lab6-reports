import React, { useState, useEffect } from 'react';
import { Treatment } from "./Treatment";
import { ReportTable } from "./ReportTable";
import { SearchBar } from "./SearchBar";
import { ReportTitle } from "./ReportTitle";
import { CssBaseline, Container, Divider, Box } from "@material-ui/core";
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
  const [ searchKey, setSearchKey ] = useState('');

  // Fetching data.
  useEffect(() => { getDataFromDatabase(setTreatments, setMatches) }, []);


  // Functions.
  async function handleRefresh(idCard: string) {
    await getDataFromDatabase(setTreatments, setMatches);
    setSearchKey(idCard);
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" fixed={false}>
        <Box m={2}/>

        <AddTreatmentForm refresh={handleRefresh} />

        <Box m={6}/>

        <Divider />

        <Box m={4}/>

        <ReportTitle
          title="Reporte de Tratamientos"
          icon={AssessmentIcon}
          color="#404040" />

        <Box m={1}/>
        
        <SearchBar
          setData={setMatches}
          data={treatments}
          searchKey={searchKey} />

        <Box m={1}/>

        <ReportTable treatmentList={matches.length > 0 ? matches : treatments }/>
      </Container>
    </React.Fragment>
  );
}

export default App;
