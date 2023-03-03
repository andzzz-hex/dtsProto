import React from "react";
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import data from "./lib/data";
import { useNavigate } from "react-router-dom";


const FenoTable = () => {
  // map + calcular variaçao 
  const rows = data.map((user) => {
    const latestFeno = user.fenoHistory[user.fenoHistory.length - 1];
    const prevFeno = user.fenoHistory[user.fenoHistory.length - 2];
    const variation = prevFeno ? latestFeno - prevFeno : 0;
    const parseid = user.id;
    return { name: user.fullName, latestFeno, variation, parseid };
  });

  // mudar cor de valores feno
  const renderValue = (value) => {
    let color = "";
    let muiicon = "circle";
    if (value > 0) {
      color = "green";
      muiicon = "north_east";

    } else if (value < 0) {
      color = "red";
      muiicon = "south_east";
    } else {
      color = "yellow";
      muiicon = "circle";

    }
    const style = { color };
    return <span className="material-symbols-outlined" style={style}>{muiicon}</span>;
  };



  const navigate = useNavigate();

 const id = rows.parseid

  return (
    <Paper elevation={6} style={{ borderRadius:'8px', paddingTop:'24px' }} > 

    <Table >
      <TableHead>
        <TableRow >
          <TableCell style={{marginTop:'16px', padding:'32px', paddingTop:'12px', paddingBottom:'12px'}}>Name</TableCell>
          <TableCell style={{padding:'32px', paddingTop:'12px', paddingBottom:'12px'}} align="left">Latest Feno</TableCell>
          <TableCell style={{padding:'32px', paddingTop:'12px', paddingBottom:'12px'}} align="left">Variation</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row, index) => (
            <TableRow key={index} onClick={() => (navigate('/patientprofile', {state: {index} } ))}>
            <TableCell  style={{padding:'32px', paddingTop:'12px', paddingBottom:'12px'}} component="th" scope="row">
              {row.name}
            </TableCell>
            <TableCell style={{padding:'32px', paddingTop:'12px', paddingBottom:'12px'}} align="left">{row.latestFeno}</TableCell>
            <TableCell  style={{padding:'32px', paddingTop:'12px', paddingBottom:'12px'}} align="left">{renderValue(row.variation)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </Paper>
  );
};

export default FenoTable;
