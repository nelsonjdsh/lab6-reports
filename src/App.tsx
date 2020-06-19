import React from 'react';
import { Treatment } from "./Treatment";
import { ReportTable } from "./ReportTable";
import { SearchBar } from "./SearchBar";
import { ReportTitle } from "./ReportTitle";
import { CssBaseline, Container } from "@material-ui/core";

const rows = Treatment.getData()

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" fixed={false}>
        {/* Title */} 
        <ReportTitle />

        <br />
        
        <SearchBar />

        <br />

        <ReportTable treatmentList = {rows}/>
      </Container>
    </React.Fragment>
  );
}

export default App;
