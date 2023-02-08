import Navicon from "../components/navicon";

export default function Navrail() {
    return (
        <div id="sidebar">
          <div id="sidebaricons">
          <Navicon icon="home" label="Dashboard" link='/' />
          <Navicon icon="search" label="Find Patient"  link='findpatient' />
          <Navicon icon="person_add" label="New Patient"/>
          <Navicon icon="menu_book" label="Knowlege base"/>
          
          <Navicon icon="help " label="Help"/>
          </div>

        </div>
    );
  }