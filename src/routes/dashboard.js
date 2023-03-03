import Grid from '@mui/material/Grid';
import FenoInterpret from '../components/calculadora';
import React from "react";
import FenoTable from '../components/dashboardtable';



export default function Dashboard(){

    return (

        <Grid container  sx={{ width:'1087px', flexGrow: 1, marginLeft: '192px', marginTop:'48px'}}>
            <Grid item xs={6} sx={{display:'inline-block'}}>
            <FenoTable />
            </Grid>

            <Grid item xs={5} sx={{display:'inline-block'}}>
            <FenoInterpret /> 

            </Grid>
        </Grid>



    )
  }
  