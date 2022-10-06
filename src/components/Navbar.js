import React from 'react';
import './Navbar.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import trackall from "./img/track_all_logo.svg";
import Dashboard from "./img/Dashboard.svg";
import Order from "./img/Order.svg";
import Inventory from "./img/Inventory.svg";
import Resources from "./img/Resources.svg";
import Right from './Right';
import Dashboar from './Dashboard';

// import {Switch} from "react-router-dom";


const Navbar = () => {
  return (
    <>
      <div className="left">
      <img src={trackall} alt="track all" style={{marginLeft: "66px"}}/>
      <hr style={{
        position: "absolute",
        width: "233px",
        height: "0px",
        left: "0px",
        top: "85px",
        border: "0.4px solid rgba(31, 31, 31, 0.5)"
      }
      } />

      <div className='Navbar'>
        <ul>
          <li className="linavbarcss"><Link to="/dashboard"><img src={Dashboard} alt="Dashboard" /> Dashboard</Link></li>
          <li className="linavbarcss" style={{marginLeft: "-10px"}}><Link to="/ordered" ><img src={Order} alt="Order" /> Ordered</Link></li>
          <li className="linavbarcss" style={{marginLeft: "-7px"}}><Link to="/inventory" ><img src={Inventory} alt="Inventory" /> Inventory</Link></li>
          <li className="linavbarcss" style={{marginLeft: "-8px"}}><Link to="/resources" ><img src={Resources} alt="Resources" /> Resource</Link></li>
        </ul>
      </div>
    </div>
    </>
  );
}

export default Navbar

