import "./App.css";
import { useState } from "react";
import Axios from "axios";
import { Button, Container, Col, Row } from 'reactstrap';
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Header from './components/Header';
import Register from './components/Register';

import Userhome from "./components/Userhome";
import Login from "./components/Login"

import Addpassenger from "./components/Addpassengers"
import Userdetails from "./components/Userdetails"
import Adminlogin from "./components/Adminlogin"
import Adminhome from "./components/Adminhome"
import AllFlightsDetails from "./components/AllFlightsDetails"//Addflights
import Addflights from "./components/Addflights"
import Getbooking from "./components/Getbooking"//Allflights
import Allflights from "./components/Allflights"/* Updatedetails */
import Updatedetails from "./components/Updatedetails"/* DynamicForm */

import Getallpassengers from "./components/Getallpassengers"/* Updateflight */
import Updateflight from "./components/Updateflight"/* Testgetbooking */
import Testgetbooking from "./components/Testgetbooking"/* Mtrlogin */
import Mtrlogin from "./components/Mtrlogin"/* Receipt */
import Receipt from "./components/Receipt"
import Logout from "./components/Logout"
import Log from "./comp/Log"

import Home from './components/Home';
import Allcourse from './components/ALLcourse'
import Addcourse from './components/Addcourse'
import DynamicForm from "./components/Dynamicform"/* Getallpassengers */
/* ------------------------- */
function App() {



  return <div>
    <Router>
      <ToastContainer />
      <Container>
        
         <Header /> 
        <div>
          
          <Route path="/Logout" component={Logout} exact />
          <Route path="/" component={Login} exact />

          {/* <Route path="/DynamicForm" component={DynamicForm} exact />
          <Route path="/add-course" component={Addcourse} exact />
          <Route path="/view-courses" component={Allcourse} exact />
          <Route path="/Mtrlogin" component={Mtrlogin} exact />{/* Receipt */}


          
          <Route path="/Register" component={Register} exact />
          <Route path="/Userhome" component={Userhome} exact />
          <Route path="/Addpassenger" component={Addpassenger} exact />
          <Route path="/Userdetails" component={Userdetails} exact />
          <Route path="/Adminlogin" component={Adminlogin} exact />
          <Route path="/Adminhome" component={Adminhome} exact />
          <Route path="/AllFlightsDetails" component={AllFlightsDetails} exact />
          <Route path="/Addflights" component={Addflights} exact />
          <Route path="/Getbooking" component={Getbooking} exact />
          <Route path="/Allflights" component={Allflights} exact />
          <Route path="/Updatedetails" component={Updatedetails} exact />
          <Route path="/Getallpassengers" component={Getallpassengers} exact />
          <Route path="/Updateflight" component={Updateflight} exact />
          <Route path="/Testgetbooking" component={Testgetbooking} exact />
          <Route path="/Receipt" component={Receipt} exact />
          <Route Log="/Receipt" component={Log} exact />
         
        
        </div>
      </Container>
    </Router>
  </div>



}

export default App;
