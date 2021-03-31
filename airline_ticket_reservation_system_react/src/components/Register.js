import axios from "axios";
import React, { Fragment, useState } from "react";
import { Button, Container, Row, Form, FormGroup, Input, Card, CardBody, Col, Label, CustomInput, NavLink } from "reactstrap";
import Allcourse from "./ALLcourse";
import Axios from "axios";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import validator from 'validator'
import PhoneInput from 'react-phone-number-input'
const Register = () => {
    let history = useHistory();
    /* const [firstnameReg, setfirstnameReg] = useState('');
    const [lastnameReg, setlastnameReg] = useState('');
    const [passwordReg, setpasswordReg] = useState('');
    const [genderReg, setgenderReg] = useState('');
    const [aboutyouReg, setaboutyouReg] = useState(''); */
    /* --------------------------------------------------------------------- */
    const [userIdmsg, setuserIdmsg] = useState(false);
    const [userId, setuserId] = useState('');
    /* ------------------------------------------------------------------ */
    const [userNameReg, setuserNameReg] = useState('');
    const [userPhoneReg, setuserPhoneReg] = useState('');
    const [userEmailReg, setuserEmailReg] = useState('');
    const [userPasswordReg, setuserPasswordReg] = useState('');

    const [userNameErr, setuserNameErr] = useState('');
    const [userPhoneErr, setuserPhoneErr] = useState('');
    const [userEmailErr, setuserEmailErr] = useState('');
    const [userPasswordErr, setuserPasswordErr] = useState('');

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
        Axios.post("http://localhost:8086/user/addUser", {

            email: userEmailReg,
            password: userPasswordReg,
            phone: userPhoneReg,
            userName: userNameReg




        }).then((Response) => {
            console.log(Response.data.userId);
            setuserId(Response.data.userId);
            if (Response.status === 200) {
                setuserIdmsg(true)
                toast.success("user regisetration successfull ")
                toast.warn("Redirecting to Login Page..")

                const timer = setTimeout(() => {
                     history.push("/");
                 }, 3000); 
                 return () => clearTimeout(timer);


            }
        });
    };
    //-------------------
    function userHandler(e) {
        let item = e.target.value;
        if (item.length ==0) {
            setuserNameErr(true)
        }
        else {
            setuserNameErr(false)
        }
        setuserNameReg(e.target.value);
    }

    function passwordHandler(e) {
        let item = e.target.value;
        if (item.length<8) {
            setuserPasswordErr(true)
        }
        else {
            setuserPasswordErr(false)
        }
        setuserPasswordReg(e.target.value);
    }
    function emailHandler(e) {
        let item = e.target.value;
        if (validator.isEmail(item)) {
            setuserEmailErr(false)
        }
        else {
            setuserEmailErr(true)
        }
        setuserEmailReg(e.target.value);

    }


    function phoneHandler(e) {
        let item = e.target.value;
        var pattern = new RegExp(/^[0-9\b]+$/);
        if (item.length <10) {
            setuserPhoneErr(true)
        }
        else if (!pattern.test(item)){
            setuserPhoneErr(true)
        }
        else {
        setuserPhoneErr(false)
        }
        setuserPhoneReg(e.target.value);
    }
    /* --------------------------------------- */
    return (
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
            <CardBody>
                <Fragment>


                    <Container>

                        <Row>
                            <Col></Col>
                            <Col></Col>
                            <Col></Col>
                            <Col> <NavLink onClick={() => history.push("/")} color="info ml-5">Home</NavLink></Col>
                        </Row>
                    </Container>
                    <h1 className="text-center my-3">Register</h1>

                    <Form >

                        <Col md={6}>
                            <FormGroup>
                                <label >Name</label>
                                <Input type="text" placeholder="Enter Name  here"
                                    name="firstname" id="firstname"
                                   /*  onChange={(e) => {
                                        setuserNameReg(e.target.value);
                                    }}
                                /> */ onChange={userHandler} />{userNameErr ? <span style={{ color: "red", }} >Name should not empty</span> : ""}

                            </FormGroup></Col>

                        <Col md={6}>                       <FormGroup>
                            <label >email</label>
                            <Input type="email" placeholder="Enter email here" name="lastname" id="lastname"
                                /* onChange={(e) => {
                                    setuserEmailReg(e.target.value);
                                }}
                            /> */onChange={emailHandler} />{userEmailErr ? <span style={{ color: "red", }}>Email not valid</span> : ""}
                        </FormGroup>
                        </Col>

                        {/* ------------------------------------------------- */}
                        <Col md={6}>
                            <FormGroup>
                                <label >Password</label>
                                <Input type="text" placeholder="Enter password here" name="password" id="password"
                                  /*   onChange={(e) => {
                                        setuserPasswordReg(e.target.value);
                                    }} 
                                />     */   onChange={passwordHandler} />{userPasswordErr ? <span style={{ color: "red", }}>Password must be min 8 char</span> : ""}
                            </FormGroup>
                        </Col>

                        {/* ------------------------------- */}
                        <Col md={6}>
                            <FormGroup>
                                <label >phonenumber</label>
                                <Input type="number" placeholder="Phone number" name="aboutyou" id="aboutyou"
                                   /*  onChange={(e) => {
                                        setuserPhoneReg(e.target.value);
                                    }}
                                /> */ onChange={phoneHandler} />{userPhoneErr ? <span style={{ color: "red", }}>Phone Not Valid</span> : ""}

                            </FormGroup>
                        </Col>
                        <Container className='text-center'>
                            <Button style={{ height: '50px', width: '150px' }} onClick={registerUser} color="success mr-5">Register</Button>
                            <Button style={{ height: '50px', width: '150px' }} type="reset" color="warning ">Clear</Button>

                        </Container>
{
                            userIdmsg?
                        <div>
                            <h3>Your UserId is :{userId}</h3>


                        </div>:null}
                    </Form>
                </Fragment>
            </CardBody>
        </Card>

    )


}
export default Register;