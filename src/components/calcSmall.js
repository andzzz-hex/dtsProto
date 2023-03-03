import allData from './lookup.json'
import Box from '@mui/material/Box';
import React, { useState, useEffect } from 'react';
import { Button, colors, Divider, Paper, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

import data from './lib/data';

// define ITEM
const Item = styled(Box)(({ theme }) => ({
  padding: 16,
  textAlign: 'center',
  paddingTop: 16
}));

export default function CalcSmall(props) {
// usar ID para buscar dados do array
      const { id } = props;

      const user = data.find((user) => user.id === id);

      const { age, sex, height} = user;

      console.log( age)
      console.log (sex)
      console.log (height)

  const [fenolevel, setFenolevel] = React.useState('');
  
    const fenoChange = (event) => {
      setFenolevel(event.target.value);
    };

    const clearCalc = () => {setFenolevel('');};


  
// hook para alterar a pagina 
  useEffect(() => {
    let predFeno;
    let percentFeno;
    let validentry;
    if (fenolevel === '' ) {
      document.getElementById('fenofeedback').textContent="Inflamation Risk Level";
 
    } 
    else if (fenolevel < 5) {
      document.getElementById('fenofeedback').textContent="FeNO levels must be between 5-300 ppb"
    }
    else {
      let dados = allData[sex][age];
      let mspline = dados['m0'] - dados['m1'];
      predFeno = Math.exp(Math.exp(parseFloat(dados['a0']) + dados['a1'] * Math.log(height) + dados['a2'] * Math.log(age) + mspline));
      console.log("calculated predicted feno level" + predFeno);
      percentFeno = 100* fenolevel / predFeno;
      validentry = true;      
    }
    
  if (percentFeno >5 && percentFeno <120) {
      document.getElementById('fenofeedback').textContent="Feno Level is normal ("+Math.round(percentFeno)+"%)";
      document.getElementById('barra').style.backgroundColor='#85F2BF';


    } else if ( percentFeno>120 && percentFeno<202){
      document.getElementById('fenofeedback').textContent="FeNO level is above normal ("+Math.round(percentFeno)+"%)";
      document.getElementById('barra').style.backgroundColor='#f1ea65';

    } else if ( percentFeno>202 && percentFeno<300) {
      document.getElementById('fenofeedback').textContent="FeNO level is elevated ("+Math.round(percentFeno)+"%)";
      document.getElementById('barra').style.backgroundColor='#FD5E05';
    } else if (percentFeno>300) {
      document.getElementById('fenofeedback').textContent="FeNO level is elevated (300%)";
      document.getElementById('barra').style.backgroundColor='#FD5E05';
    }
  
    
    // condicional.. se feno =
  });

  return (

    <Paper sx={{ width:'420', flexGrow:'1', backgroundColor:'#F3F3F3', display: 'inline-block', position: 'relative', marginLeft: '17%', borderRadius:'8px'}}>
      

      <Grid container columnSpacing={{xs:1}} justifyContent="center" sx={{marginTop:'24px', padding:'8px'}} >

      <Grid item xs={12} >
          <Item>
            <Typography variant='h3'sx={{textAlign:'left', paddingBottom:'8px'}}>Interpret Measurement</Typography>
          </Item>
        </Grid>

      

        <Grid item xs={3} >
          <Item>
          <Box component="form" noValidate autoComplete="off">
            <TextField id="feno" label="FeNO Level" variant="outlined" value={fenolevel}  onChange={fenoChange} type="number" InputProps={{ inputProps: { min: 5, max: 80 } }} sx={{width:'128px'}} />
              </Box>
          </Item>
        </Grid>

        <Grid item xs={9 } sx={{paddingLeft:'32px', paddingTop:'0px'}}>
          <Item >

            <p id='fenofeedback' sx={{ textAlign: 'center'}}> </p>
            <Box id="barra" variant='middle' sx={{ borderRadius:'10px', minHeight:'8px',borderBottomWidth: 5, bgcolor: '#99999999', marginLeft:'32px', marginRight:'32px'}}></Box>


          </Item>
        </Grid>

        <Grid item xs={10}>
        </Grid>

                  
        <Grid item xs={6} sx={{marginBottom:'8px'}}>
          <Item>
          <Button variant='text' sx={{borderRadius:'40px',width:'144px'}} onClick={clearCalc}><span className="material-symbols-outlined">Close</span> Clear</Button>

          </Item>
        </Grid>
        <Grid item xs={6} sx={{marginBottom:'8px'}}>
          <Item>
          <Button variant='contained' sx={{borderRadius:'40px', width:'144px'}}><span className="material-symbols-outlined">insert_chart</span>Details</Button>

          </Item>
        </Grid>
      </Grid>


    </Paper>
  )}