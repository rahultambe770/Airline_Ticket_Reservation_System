import axios from "axios";
import React, { Fragment, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Card, CardBody, Col, ButtonToggle, Row, NavLink, } from "reactstrap";
import Allcourse from "./ALLcourse";
import Axios from "axios";
/* import { toast } from "react-toastify"; */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";



const Login = () => {
  let history = useHistory();
  const [userIdeReg, setuserIdReg] = useState('');
  const [passwordReg, setpasswordReg] = useState('');
  const [userErr, setUserErr] = useState(false);
  const [passErr, setPassErr] = useState(false);

  const [msg, setmsg] = useState(true);

  /* ----------------------------------------- */
  const handleForm = (e) => {
    console.log(userIdeReg);
    console.log(passwordReg);

    e.preventDefault();
  };
  let status = true;
  localStorage.setItem('status', "false");
  /* ------------------------------------------ */
  const loginUser = () => {

    Axios.post("http://localhost:8086/user/userLogin", {
      userId: userIdeReg,
      password: passwordReg,


    }).then((response) => {
      console.log(response.data.length);
      //---------------------------------------------
      let ob = {
                      uid: response.data.userId
      }
      localStorage.setItem('myid', JSON.stringify(ob));

      //----------------------------------------------
      let obj = {
                    name: response.data.userName,
                    id: response.data.userId
      }
      localStorage.setItem('mydata', JSON.stringify(obj));
      /* ----------  --  ----------------------- */
      let data = localStorage.getItem('mydata');
      let d = JSON.parse(data);
      //console.log(response.data.length);
      console.warn(d.name);
      console.warn(d.id);
      // ---------------------
      status = true;
      localStorage.setItem('status', "true");


      /* ----------------------------------- */
      toast.success(" hi '" + response.data.userName + "' Login successfull !!");
     // toast.warn(response.data)
     setmsg(true)
      
                          const timer = setTimeout(() => {
                            history.push("/Userhome");
                          }, 3000);
                          return () => clearTimeout(timer);

    }, (error) => {
     // toast.warn(error.response)
      //status = false;
      setmsg(false);
      // localStorage.setItem('status', JSON.stringify(status));
      // if (!response.ok) {
      // toast.warn(error.status)
      // }
      //toast.warn("error")
      console.log(error);
    });
  };
  //-----------------------------
  function userHandler(e) {
    let item = e.target.value;
    if (item.length < 3) {
      setUserErr(true)
    }
    else {
      setUserErr(false)
    }
    //setUser(item)
    setuserIdReg(item);
  }
  function passwordHandler(e) {
    let item = e.target.value;
    if (item.length < 8) {
      setPassErr(true)
    }
    else {
      setPassErr(false)
    }
   // setPassword(item)
    setpasswordReg(item);
  }
  //----------------------------
  return (


    <Card body inverse style={{ backgroundColor: 'white', borderColor: '#333', backgroundImage: `url("https://source.unsplash.com/1600x900/?aeroplane")`, backgroundSize: 'cover', backgroundPosition: 'center', }} >
      <CardBody><h1 className="text-center my-3">Let the journey begin</h1>
        <Fragment>
          <Form style={{
            backgroundColor: '#081a2f', width: 500, padding: 20, borderRadius: 10,
          }}><h1 className="text-center my-3">Login</h1>
            {msg ? null : <div className="text-center my-3" style={{ color: "red", }} >Invalid Id or Password</div>

            }
            <Col md={6}>
              <FormGroup>
                <label className="center">Id</label>
                <Input type="number" placeholder="Enter id  here"
                  name="firstname" id="firstname"
                 /*  onChange={(e) => {
                    setuserIdReg(e.target.value);
                  }}
                /> */
                  onChange={userHandler} />{userErr ? <span style={{ color: "red", }} >User Not Valid</span> : ""}
              </FormGroup>
            </Col>

            <Col md={6}>
              <FormGroup>
                <label >Password</label>
                <Input type="password" placeholder="Enter password here" name="password" id="password"
                 /*  onChange={(e) => {
                 //   setpasswordReg(e.target.value);
                    passwordHandler();
                  }}
                />{passErr ? <span>Password Not Valid</span> : ""} */
                  onChange={passwordHandler} />{passErr ? <span style={{ color: "red", }} >Password must be of minimum 8 characters length</span> : ""}
              </FormGroup>
            </Col>
            <Container className='text-center'>
              <Col ><ButtonToggle style={{ height: '50px', width: '150px' }} onClick={loginUser} color="success mr-25" >Login</ButtonToggle></Col>

              <Row>
                {/* <Col> <ButtonToggle style={{ height: '50px', width: '150px' }} type="reset" color="warning ">Clear</ButtonToggle></Col>
                 */}<Col><NavLink onClick={() => history.push("/Register")} color="info my-4">Register</NavLink> </Col>
                <NavLink onClick={() => history.push("/Adminlogin")}>Admin Login</NavLink>
              </Row>
            </Container>

          </Form>
        </Fragment>
      </CardBody>
    </Card>

  )


}
export default Login;