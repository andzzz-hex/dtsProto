
import Navicon from "../components/navicon";




export default function Navrail() {

  return (
 <div id="sidebar" >
          <div id="sidebaricons" style={{marginTop:'96px'}}>

          <Navicon icon="home" label="Home" link='/' />
          <Navicon id="searchIcon" icon="search" label="Find Patient"  link='findpatient' />
          <Navicon id="addPatient" icon="person_add" label="Add Patient"/>
          <Navicon icon="menu_book" label="Knowlege base"  link='knowledge'/>
          
          <Navicon icon="help " label="Help"/>

          </div>

        </div>
    );
  }


