import allData from './lookup.json'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useState, useEffect } from 'react';
import { Button, colors, Divider, Paper, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

import { width } from '@mui/system';
import { alignProperty } from '@mui/material/styles/cssUtils';

// define ITEM
const Item = styled(Box)(({ theme }) => ({
  

  padding: 16,
  textAlign: 'center',
  paddingTop: 16
}));


export default function FenoInterpret() {
  const [age,setAge] = React.useState('');
  const [sex, setSex] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [fenolevel, setFenolevel] = React.useState('');
    

    const sexChange = (event) => {
      setSex(event.target.value);
    };

    const fenoChange = (event) => {
      setFenolevel(event.target.value);
    };

    
    const ageChange = (event) => {
      setAge(event.target.value);
    };

    const heightChange = (event) => {
      setHeight(event.target.value);
    };

    const clearCalc = () => {
      setAge('');
      setHeight('');
      setFenolevel('');
      setSex('');
    }



// hook para alterar a pagina 
  useEffect(() => {
    let predFeno;
    let percentFeno;
    let validentry;
    if (age === '' || height === '' || sex === ''  ) {
      document.getElementById('fenofeedback').textContent="Please enter patient data";

      
    } 
    else if ( age > 5 && age < 80  && 80 > height < 250) {
      let dados = allData[sex][age];
      let mspline = dados['m0'] - dados['m1'];
      predFeno = Math.exp(Math.exp(parseFloat(dados['a0']) + dados['a1'] * Math.log(height) + dados['a2'] * Math.log(age) + mspline));
      console.log("calculated predicted feno level" + predFeno);
      percentFeno = 100* fenolevel / predFeno;
      validentry = true;
    }
    else {
      document.getElementById('fenofeedback').textContent="Only ages 5-80 and heights of 120-210 are valid";
      
    }
    
    if (validentry === true && fenolevel <5) {
      document.getElementById('fenofeedback').textContent="FeNO levels must be between 5-300 ppb";
      document.getElementById('barra').style.backgroundColor='#FFFFFF';


    } else if (validentry === true && percentFeno >5 && percentFeno <120) {
      document.getElementById('fenofeedback').textContent="Feno Level is normal ("+Math.round(percentFeno)+"%)";
      document.getElementById('barra').style.backgroundColor='#85F2BF';


    } else if (validentry === true && percentFeno>120 && percentFeno<202){
      document.getElementById('fenofeedback').textContent="FeNO level is above normal ("+Math.round(percentFeno)+"%)";
      document.getElementById('barra').style.backgroundColor='#f1ea65';

    } else if (validentry === true && percentFeno>202 && percentFeno<300) {
      document.getElementById('fenofeedback').textContent="FeNO level is elevated ("+Math.round(percentFeno)+"%)";
      document.getElementById('barra').style.backgroundColor='#FD5E05';
    } else if (validentry === true && percentFeno>300) {
      document.getElementById('fenofeedback').textContent="FeNO level is elevated (300%)";
      document.getElementById('barra').style.backgroundColor='#FD5E05';
    }
  
    
    // condicional.. se feno =
  });

  return (

    <Paper sx={{ flexGrow:'1', backgroundColor:'#F3F3F3', display: 'inline-block', position: 'relative', marginLeft: '17%', borderRadius:'8px'}}>
      

      <Grid container columnSpacing={{xs:1}} justifyContent="center" sx={{marginTop:'24px', padding:'8px'}} >

      <Grid item xs={12} >
          <Item>
            <Typography variant='h3'sx={{textAlign:'left', paddingBottom:'16px'}}>Interpret Measurement</Typography>
          </Item>
        </Grid>

      

        <Grid item xs={6} >
          <Item>
          <Box component="form" noValidate autoComplete="off">
            <TextField id="feno" label="FeNO" variant="outlined" value={fenolevel}  onChange={fenoChange} type="number" InputProps={{ inputProps: { min: 5, max: 80 } }} sx={{width:144}} />
              </Box>
          </Item>
        </Grid>


        <Grid item xs={6} >
          <Item>
            <FormControl>
            <Select sx={{maxWidth:144, minWidth:144}}
              labelId="gender-label"
              id="gender-select"
              value={sex}
              label="Gender"
              onChange={sexChange} >
              <MenuItem value={'Male'}>Male</MenuItem>
              <MenuItem value={'Female'}>Female</MenuItem>
            </Select>
              <InputLabel id="gender-label" sx={{marginLeft: '0px',  marginTop:'0'}}>Gender</InputLabel>
            </FormControl>
          </Item>
        </Grid>


        <Grid item xs={6}>
          <Item>
            <Box component="form" noValidate autoComplete="off">
            <TextField id="age" label="Age" variant="outlined" value={age}  onChange={ageChange} type="number" InputProps={{ inputProps: { min: 5, max: 80 } }} sx={{width:144}} />
            </Box>
          </Item>
        </Grid>


        <Grid item xs={6}>
          <Item>
          <Box component="form" noValidate autoComplete="off">
          <TextField id="height" label="Height" variant="outlined" value={height}  onChange={heightChange} type="number" InputProps={{ inputProps: { min: 120, max: 250 } }} sx={{width:144}} />
          </Box>
          </Item>
        </Grid>

        <Grid item xs={12}>
          <Item>

            <p id='fenofeedback' sx={{ textAlign: 'right'}}> </p>

          </Item>
        </Grid>

        <Grid item xs={10}>
          <Box id="barra" variant='middle' sx={{ borderRadius:'10px', minHeight:'8px',borderBottomWidth: 5, bgcolor: '#99999999'}}></Box>
        </Grid>

                  
        <Grid item xs={6} sx={{marginTop:'25px'}}>
          <Item>
          <Button variant='text' sx={{borderRadius:'40px',width:'144px'}} onClick={clearCalc}><span className="material-symbols-outlined">Close</span> Clear</Button>

          </Item>
        </Grid>
        <Grid item xs={6} sx={{marginTop:'25px'}}>
          <Item>
          <Button variant='contained' sx={{borderRadius:'40px', width:'144px'}}><span className="material-symbols-outlined">insert_chart</span>Details</Button>

          </Item>
        </Grid>
      </Grid>


    </Paper>
  )}



//<InputLabel id="gender-label" sx={{marginLeft: '24px',  marginTop:'24px', minWidth:144}}>Gender</InputLabel>