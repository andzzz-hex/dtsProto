import { Grid, Paper } from "@mui/material";
import { useLocation } from "react-router-dom";
import AddFeno from "../components/addfeno";
import CalcSmall from "../components/calcSmall";
import ProfileSum from "../components/profilesum";


export default function Profile(){
    const {state} = useLocation();
    const { index } = state  ; // Read values passed on state... como incremetar em um ?! 


    const routerID = index + 1; // adjust id 0 -> 1 


    return (
        <div sx={{ width:'1280px', flexGrow: 1, marginLeft: '192px', marginTop:'48px',}}>

        <Grid container  sx={{ width:'1120px', flexGrow: 1, marginLeft: '192px', paddingTop:'64px'}}>
            <Grid item xs={5} sx={{display:'inline-block', }} >
            <ProfileSum id={routerID} />
            </Grid>

 

            <Grid item xs={7} sx={{display:'inline-block'}}>
            <CalcSmall id={routerID} />
            </Grid>

        </Grid>
        </div>
    )

  }