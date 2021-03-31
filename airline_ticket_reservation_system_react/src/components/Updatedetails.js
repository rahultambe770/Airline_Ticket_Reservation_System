import axios from "axios";
import React, { Fragment, useState,useEffect } from "react";
import { Button, Container, Form, FormGroup, Input, Card, CardBody, Col, Label, CustomInput, NavLink, Row } from "reactstrap";
import Allcourse from "./ALLcourse";
import Axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import PhoneInput from 'react-phone-number-input'
const Updatedetails = () => {
    let history = useHistory();

    const [userTypeReg, setuserTypeReg] = useState('');
    const [userIdReg, setuserIdReg] = useState('');
    const [userNameReg, setuserNameReg] = useState('');
    const [userPhoneReg, setuserPhoneReg] = useState('');
    const [userEmailReg, setuserEmailReg] = useState('');
    const [userPasswordReg, setuserPasswordReg] = useState('');
    const [userinfo, setuserinfo] = useState('');
    //-----------------------------------------------
    let dat = localStorage.getItem('myid');
    let da = JSON.parse(dat);
    console.log("huu=" + da.uid);
    //-------------------------------------
    const [user, setUser] = useState('');
    const [u, setU] = useState('');
    /* ----------------------------------------- */
    const handleForm = (e) => {
        console.log(user.name);
        console.log(user.password);
        e.preventDefault();
    };
    /* -------------------------------- */
    const registerUser = () => {
        Axios.post("http://localhost:8086/user/updateUser", {

            email: userEmailReg,
            password: userPasswordReg,
            phone: userPhoneReg,
            userId: da.uid,
            userName: userNameReg

        }).then((Response) => {
            console.log(Response.data);
            if (Response.status === 200) {
                toast.success("user updation successfull ")

                  const timer = setTimeout(() => {
                     history.push("/Userhome");
                 }, 3000); 
                 return () => clearTimeout(timer);


            }
        });
    };
    //-------------------------------------------------
//-----------------------------------------------------
    const getUser = () => {

        Axios.get("http://localhost:8086/user/getUser/" + da.uid
        ).then((response) => {
            console.log(response.data);
            setuserinfo(response.data)
        }, (error) => {
            console.log(error);
        });
    };
    //---------------------------------------
    useEffect(() => {
        getUser();
    }, [])
    /* -------------------------------- */


    //----------------------------
    let stat = localStorage.getItem('status');
    let sta = JSON.parse(stat);
    //--------------------------
    return (

        <div>
            {sta ?
                <div>


                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
                        <CardBody>
                            <Fragment>


                                <Container>

                                    <Row>
                                        <Col> <NavLink onClick={() => history.push("/Userhome")} color="info ml-5">Home</NavLink></Col>
                                        <Col></Col>
                                        <Col></Col>
                                        <Col> <NavLink onClick={() => history.push("/Logout")} color="info ml-5">Logout</NavLink></Col>
                                    </Row>
                                </Container>

                                <h1 className="text-center my-3">Update User Details</h1>

                                <Form >
                                    {/* -------------------------------------------- */}
                                    <Col md={6}>
                                        <FormGroup>
                                            <label >User Id</label>
                                            <Input disabled type="text" placeholder={da.uid}
                                                name="firstname" id="firstname"
                                                onChange={(e) => {
                                                    setuserNameReg(e.target.value);
                                                }}
                                            />
                                        </FormGroup></Col>
                                    {/* ---------------------------------------------------- */}
                                    <Col md={6}>
                                        <FormGroup>
                                            <label >Name</label>
                                            <Input type="text" placeholder="Enter Name  here"
                                                name="firstname" id="firstname"
                                                onChange={(e) => {
                                                    setuserNameReg(e.target.value);
                                                }}
                                            />
                                        </FormGroup></Col>

                                    <Col md={6}>                       <FormGroup>
                                        <label >email</label>
                                        <Input type="text" placeholder="Enter email here" name="lastname" id="lastname"
                                            onChange={(e) => {
                                                setuserEmailReg(e.target.value);
                                            }}
                                        />
                                    </FormGroup>
                                    </Col>
                                    {/* ----------------------------- */}

                                    {/* ------------------------------------------------- */}
                                    <Col md={6}>
                                        <FormGroup>
                                            <label >Password</label>
                                            <Input type="text" placeholder="Enter password here" name="password" id="password"
                                                onChange={(e) => {
                                                    setuserPasswordReg(e.target.value);
                                                }}
                                            />
                                        </FormGroup>
                                    </Col>

                                    {/* ------------------------------- */}
                                    <Col md={6}>
                                        <FormGroup>
                                            <label >phonenumber</label>
                                            <Input type="number" placeholder="Phone number" name="aboutyou" id="aboutyou"
                                                onChange={(e) => {
                                                    setuserPhoneReg(e.target.value);
                                                }}
                                            />
                                        </FormGroup>
                                    </Col>
                                    <Container className='text-center'>
                                        <Button style={{ height: '50px', width: '150px' }} onClick={registerUser} color="success mr-5">Update User info</Button>
                                        <Button style={{ height: '50px', width: '150px' }} type="reset" color="warning ">Clear</Button>

                                    </Container>

                                </Form>
                            </Fragment>
                        </CardBody>
                    </Card>
                </div>
                :
                <div>
                    <h1>Log in to continue</h1>
                    <NavLink onClick={() => history.push("/")}>Login</NavLink>

                </div>

            }
        </div>
    )


}
export default Updatedetails;