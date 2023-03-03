import PatientTable from "../components/patienttable";
import { Grid } from "@mui/material";
export default function Findpatient(){
    return (

        <Grid container  sx={{ width:'895px', flexGrow: 1, marginLeft: '192px', marginTop:'96px'}}>
            <Grid item xs={12} sx={{display:'inline-block'}}>
            <PatientTable />                
            </Grid>

        </Grid>
    )
  }