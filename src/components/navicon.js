/*const Navicon = () => {
    return (
        <><h1> cenas</h1>
        <button> sdsdds</button>
        </>
    )
};

export default Navicon;
*/
import { Typography } from '@mui/material';

export default function Navicon(props) {
    return (
        <div className="menuitem">
        <a href={props.link} >
        <span className="material-symbols-outlined">{props.icon}</span>
        <br/><Typography variant='caption'>{props.label}</Typography>
        </a>
        </div>
        )
}