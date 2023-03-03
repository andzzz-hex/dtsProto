import React from 'react';
import DataTable from "./DataTable";

import data from "./lib/data.js";



function PatientTable() {
    return (
        <>
        <DataTable title={'Patient Database'} data={data} />
      <br />
        </>
      );
    
}

export default PatientTable;

/*
<Paper> 
 <Grid container justifyContent="center">
    <Grid item xs={1}>
        <h1> Patients
        </h1>
    </Grid>


 </Grid>

</Paper>

*/


