import React, { useState } from "react";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box"
import Button from '@material-ui/core/Button';
import LocalHospitalTwoToneIcon from '@material-ui/icons/LocalHospitalTwoTone';
import SaveIcon from '@material-ui/icons/Save';
import { ReportTitle } from "./ReportTitle";
import { Treatment } from "./Treatment";

interface IAddTreatmentFormProps {
  refresh: (idCard: string) => void; 
}

async function saveTreatment(treatment: Treatment) {
  try {
    var response = await fetch(
      'https://localhost:5001/treatments',
      { 
        method: 'POST',
        mode: 'cors',
        cache: 'default',
        body: JSON.stringify(treatment),
        headers: new Headers({
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        })
      }
    );
  } catch(e) {
    console.log(e);
  }
}

export function AddTreatmentForm({ refresh }: IAddTreatmentFormProps) {
  // State.
  const [ idCard, setIdCard ] = useState('');
  const [ medicine, setMedicine ] = useState('');
  const [ quantity, setQuantity ] = useState(0);
  const [ nurse, setNurse ] = useState('');
  const [ doctor, setDoctor ] = useState('');

  // Functions.
  async function handleSave() {
    const treatment = new Treatment({ nurse, doctor, idCard, medicine, quantity });
    await saveTreatment(treatment);
    refresh(idCard);
  }

  return (
    <React.Fragment>
      <div>
        <ReportTitle
          title="Registrar tratamiento"
          icon={LocalHospitalTwoToneIcon}
          color="#005A8E"/>
          
        {/* Cédula */}
        <Box 
          display="flex"
          flexDirection="row"
          justifyItems="center">
          <Box alignSelf="center">
            <TextField
              label="Cédula"
              type="text"
              value={idCard}
              onChange={(e) => setIdCard(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined" />
          </Box>

          <Box alignSelf="center" m={2}>
            <TextField
              label="Medicina"
              type="text"
              value={medicine}
              onChange={(e) => setMedicine(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined" />

          </Box>
            <Box alignSelf="center" m={2}>
            <TextField
              label="Cantidad"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined" />
          </Box>
        </Box>

        <br />

        {/* Enfermera y Doctor */}
        <Box 
          display="flex"
          flexDirection="row"
          justifyItems="center">
          <Box alignSelf="center">
            <TextField
              label="Enfermera"
              type="text"
              value={nurse}
              onChange={(e) => setNurse(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined" />
          </Box>
          <Box alignSelf="center" m={2}>
            <TextField
              label="Doctor"
              type="text"
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
              InputLabelProps={{
                shrink: true,
              }}
              variant="outlined" />
          </Box>
        </Box>

        <Button
          variant="outlined"
          color="primary"
          size="medium"
          startIcon={<SaveIcon />}
          onClick={handleSave}
        >
          Guardar Registro
        </Button>

      </div>
    </React.Fragment>
  );
}
