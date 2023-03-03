import Grid from '@mui/material/Grid';
import React from "react";
import { Paper, Typography } from '@mui/material';



export default function Knowledge(){

    return (

        <Grid container  sx={{ width:'1087px', flexGrow: 1, marginLeft: '192px', marginTop:'48px'}}>
            <Grid item xs={12} sx={{display:'inline-block'}}>

                <Paper sx={{padding:'32px'}}>
                <Typography variant='h4' style={{fontWeight:'bold'}}>
                How does elevated FeNO relate to asthma and to type-2 inflammation in the airways?
                </Typography>

                <p>

                Type-2 inflammation in the airways, typical for atopic asthma and adult-onset eosinophilic asthma, is characterized by the infiltration of inflammatory cells such as eosinophils and mast cells. Elevated FeNO in asthma is primarily driven by the local activity of the cytokines IL-4 and IL-13, and is associated with a clinical response to inhaled corticosteroids
                [2, 3].
                Furthermore, elevated FeNO is closely associated with the presence of airway hyperresponsiveness, especially that to indirect challenges (mannitol, physical exercise)
                [4].
                </p>
                </Paper>

                <Paper sx={{padding:'32px', marginTop:'32px'}}>
                <Typography variant='h4' style={{fontWeight:'bold', }}>
                Are there any limitations with this interpretation?
                </Typography>
                <p>
                Yes, these predicted values are only applicable in Caucasian, healthy non-smoking individuals in the age range of 6-79 years. If your patient’s characteristics differ from these, the interpretation of FeNO may be different.
                </p>
                </Paper>

                <Paper sx={{padding:'32px', marginTop:'32px'}}>
                <Typography variant='h4' style={{fontWeight:'bold', }}>
                References?
                </Typography>
                <p>
                1.
Amaral, R., Jacinto, T., Malinovchi, A., Janson, C., Sousa-Pinto, B., Olin, A-C., et al. Development and validation of non-linear reference equations for individualized FeNO cutoffs. (In preparation)
2.
Bjermer, L., Alving, K., Diamant, Z., Magnussen, H., Pavord, I., Piacentini, G., et al. (2014). Current evidence and future research needs for FeNO measurement in respiratory diseases. Respiratory medicine, 108(6), 830–841https://doi.org/10.1016/j.rmed.2014.02.005
3.
Price, D. B., Buhl, R., Chan, A., Freeman, D., Gardener, E., Godley, C., et al. (2018). Fractional exhaled nitric oxide as a predictor of response to inhaled corticosteroids in patients with non-specific respiratory symptoms and insignificant bronchodilator reversibility: a randomised controlled trial. The Lancet. Respiratory medicine, 6(1), 29–39. https://doi.org/10.1016/S2213-2600(17)30424-1
4.
Sverrild, A., Malinovschi, A., Porsbjerg, C., Backer, V., & Alving, K. (2013). Predicting airway hyperreactivity to mannitol using exhaled nitric oxide in an unselected sample of adolescents and young adults. Respiratory medicine, 107(1), 150–152. https://doi.org/10.1016/j.rmed.2012.09.004                </p>
                </Paper>
    
    
            </Grid>

        </Grid>



    )
  }
  