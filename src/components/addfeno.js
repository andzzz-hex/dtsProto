import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import data from "./lib/data"; // fonte datos feno-user

function AddFeno(props) {
    const { id } = props;
    const [fenoValue, setFenoValue] = useState("");
    // encontrar user pelo id
    const user = data.find((user) => user.id === id);
    if (!user) {
    return <div>User not found</div>;
}
    const handleFenoChange = (event) => {
    setFenoValue(event.target.value);
};
    const handleSubmit = (event) => {
    event.preventDefault();
    // substituir console log por... adicionar dados á DB ? 
    console.log(data);
    user.feno = parseFloat(fenoValue);

};
    return (<form onSubmit={handleSubmit}><TextField
        label="Feno value"
        type="number"
        value={fenoValue}
        onChange={handleFenoChange}
        style={{ marginRight: "1rem" }}
        /><Button type="submit" variant="contained" color="primary">
        Save</Button></form>
);
}
export default AddFeno;