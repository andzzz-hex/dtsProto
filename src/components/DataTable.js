import React from "react";
import { TableRow, TableHead, Typography, TableCell, TableBody, Table, Paper } from '@mui/material';
import { useNavigate } from "react-router-dom";



function DataTable({ title, data }) {
  const headers = Object.keys(data[0]);
  
  const navigate = useNavigate();
  
  return (
    <Paper style={{ padding:'24px'}}>
      <Typography variant="h3" color="inherit" padding={'24px'}>
        {title}
      </Typography>

      <hr />

      <Table >
        <TableHead>
          <TableRow>
            {headers.map(header => (
              <TableCell align="left">{header.toUpperCase()}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>

          {data.map((emp, index) => (
            <TableRow key={index} onClick={() => (navigate('/patientprofile', {state: {index} } ))}>
              {headers.map(header => (
                <TableCell align="left">{emp[header]}</TableCell>
              ))}

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

DataTable.defaultProps = {
  title: "Patient Database"
};

export default DataTable;
