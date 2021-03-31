import axios from "axios";
import React, { Fragment, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Card, CardBody, Col, ButtonToggle, Row, NavLink, } from "reactstrap";
import Allcourse from "./ALLcourse";
import Axios from "axios";
/* import { toast } from "react-toastify"; */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";



const Adminlogin = () => {
    let history = useHistory();
    const [userIdeReg, setuserIdReg] = useState('');
    const [passwordReg, setpasswordReg] = useState('');
    const [msg, setmsg] = useState('');
    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);

    /* ----------------------------------------- */
    const handleForm = (e) => {

        e.preventDefault();
    };
    /* -------------------------------- */
    const loginUser = () => {

        Axios.post("http://localhost:8086/admin/adminLogin", {
            adminId: userIdeReg,
            password: passwordReg,

        }).then((response) => {
            console.log(response.data);
            let obj = {
                name: response.data.adminName,
                id: response.data.adminId,

            }
            localStorage.setItem('admindata', JSON.stringify(obj));
            localStorage.setItem('status1', "true");
            /* ----------------------------------- */
            toast.success(" hi Admin Login successfull !!");
            const timer = setTimeout(() => {
                history.push("/Adminhome");
            }, 3000);
            return () => clearTimeout(timer);

        }, (error) => {
            console.log(error);


        });
    };
    //----------------------------
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
      //  setPassword(item)
        setpasswordReg(item);
    }

    //------------------------------------
    return (


        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} >
            <CardBody>
                <Fragment>
                    <h1 className="text-center my-3">Admin Login</h1>

                    <Form >
                        <Col md={6}>
                            <FormGroup>
                                <label className="center">Id</label>
                                <Input type="number" placeholder="Enter Admin id  here"
                                    name="firstname" id="firstname"
                                    /* onChange={(e) => {
                                        setuserIdReg(e.target.value);
                                    }}
                                /> */onChange={userHandler} />{userErr ? <span style={{ color: "red", }}>User Not Valid</span> : ""}

                            </FormGroup>
                        </Col>

                        <Col md={6}>
                            <FormGroup>
                                <label >Password</label>
                                <Input type="password" placeholder="Enter Admin password here" name="password" id="password"
                                  /*   onChange={(e) => {
                                        setpasswordReg(e.target.value);
                                    }}
                                /> */ onChange={passwordHandler} />{passErr ? <span style={{ color: "red", }}>Password length must be 8 characters </span> : ""}

                            </FormGroup>
                        </Col>
                        <Container className='text-center'>

                            <Row>
                                <Col ><ButtonToggle style={{ height: '50px', width: '150px' }} onClick={loginUser} color="success mr-25" >Login</ButtonToggle></Col>
                                <Col> <ButtonToggle style={{ height: '50px', width: '150px' }} type="reset" color="warning ">Clear</ButtonToggle></Col>
                                <Col><NavLink onClick={() => history.push("/Register")} color="info my-4">Register</NavLink> </Col>
                                <NavLink onClick={() => history.push("/")}>User Login</NavLink>
                            </Row>
                        </Container>

                    </Form>
                </Fragment>
            </CardBody>
        </Card>

    )


}
export default Adminlogin;