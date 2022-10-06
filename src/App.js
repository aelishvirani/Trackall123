import React from "react";
// import "./App.css";
import Navbar from "./components/Navbar";
import Ordered from "./components/Ordered";
import Dashboard from "./components/Dashboard";
import Inventory from "./components/Inventory";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import Resources from "./components/Resources";
import Right from "./components/Right";
import Body from "./components/Body";
import Setup from "./components/Setup";

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Navbar />
          <Right />
          <Routes>
            <Route path="dashboard" exact element={<Dashboard />}></Route>
            <Route path="ordered" element={<Ordered />}></Route>
            <Route path="inventory" element={<Inventory />}></Route>
            <Route path="Resources" element={<Resources />}></Route>
          </Routes>
        </div>
      </Router>
      {/* <Setup/> */}
      {/* <Body/> */}

      {/* <Ordered/> */}
    </>
  );
}

export default App;
