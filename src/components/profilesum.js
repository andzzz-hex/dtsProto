import React from "react";


import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import data from "./lib/data.js"; // assuming a file named "users.js" in the same directory
import { Button, Divider } from "@mui/material";


function ProfileSum(props) {
  const { id } = props;

  const user = data.find((user) => user.id === id);
      if (!user) {
      return <div>User not found</div>;
      }

  const { fullName, age, sex, height, avatarSrc } = user;
  return (
  <div style={{ padding: "1rem" }}>
    <div style={{ textAlign: "center", margin:'auto', padding:'16px'}}>

    <Typography variant="h2" component="h2" align="center">{fullName}</Typography>
    </div>
    <Divider style={{margin:'16px'}}/>
      <div id="avatar" style={{display:'inline-block'}}>

      <Avatar alt={fullName} src={avatarSrc} style={{ marginLeft: "48px", marginTop: "24px", width: "104px", height: '104px' }} />
      </div>
        <div style={{display:'inline-block', align:'center', marginLeft:'72px'}}> 

        <Typography variant="body1"> <span style={{ fontWeight:'bold' }}> Age: </span> {age}</Typography>
        
        <Typography variant="body1"><span style={{ fontWeight:'bold' }}> Gender: </span> {sex}</Typography>
        
        <Typography variant="body1"> <span style={{ fontWeight:'bold' }}> Height: </span> {height} cm</Typography>
        </div>

      <div style={{ textAlign: "center", margin:'auto', padding:'16px'}}>

      <Button variant='outlined' sx={{borderRadius:'40px', width:'128px', padding:'8px'}}><span className="material-symbols-outlined">edit</span>Edit</Button>
      <Button variant='outlined' sx={{marginLeft:'32px', borderRadius:'40px', width:'128px', padding: '8px'}}><span className="material-symbols-outlined">add</span>Details</Button>
      </div>
      <Divider  style={{margin:'16px'}}/>
  </div>
);
}


export default ProfileSum;