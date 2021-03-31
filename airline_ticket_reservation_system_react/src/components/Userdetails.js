import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { Button, Container, Form, NavLink,FormGroup, Input, Card, CardBody, Col, ButtonToggle, Row, Spinner, } from "reactstrap";
import Allcourse from "./ALLcourse";
import Axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";



const Userdetails = () => {
    let history = useHistory();
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setemail] = useState('');
    const [passwordReg, setpasswordReg] = useState('');

    const [msg, setmsg] = useState('');
    /* ----------------------------------------- */
    const handleForm = (e) => {


        e.preventDefault();
    };
    useEffect(() => {
        loginUser();

    }, [])
    /* -------------------------------- */

    let data = localStorage.getItem('mydata');
    let d = JSON.parse(data);
    console.warn(d.name);
    console.warn("id=" + d.id);
    //---------------------------------------
    let dat = localStorage.getItem('myid');
    let da = JSON.parse(dat);
    console.log("huu=" + da.uid);
    //----------------------------------------
    const loginUser = () => {

        Axios.get("http://localhost:8086/user/getUser/" + da.uid



        ).then((response) => {

            var dat = JSON.stringify(response.data);

            console.log(response.data);

            setemail(response.data.email);
            setId(response.data.userId)
            setPhone(response.data.phone)
            setName(response.data.userName)

            let obj = { name: response.data.userName }
            localStorage.setItem('mydata', JSON.stringify(obj));
            /* --------------------------------- */
            let data = localStorage.getItem('mydata');
            let d = JSON.parse(data);
            /* ----------------------------------- */
          //  toast.success(" hi '" + response.data.userName + "' Login successfull !!");
            //toast.warn("Redirecting you to details.")
            /* const timer = setTimeout(() => {
                history.push("/Userhome");
            }, 3000);
            return () => clearTimeout(timer); */

        }, (error) => {
            console.log(error);

        });
    };
    //----------------------------
    let stat = localStorage.getItem('status');
    let sta = JSON.parse(stat);
    //--------------------------
    return (

        <div>
            {
                sta?
                <div>
                    <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} >
                        <CardBody>
                            <Fragment>
                                <h1 className="text-center my-3">User Details</h1>
                                <Container>
                                    <Row>
                                        <Col xs="6" sm="4"> <Button style={{ height: '50px', width: '150px' }} color="success" onClick={() => history.push("/Userhome")} >Home</Button></Col>
                                        <Col xs="6" sm="4"></Col>
                                        <Col sm="4"> <Button onClick={() => history.push("/Logout")} style={{ height: '50px', width: '150px' }} color="danger" >Logout</Button>
                                        </Col>
                                    </Row>

                                </Container>

                            </Fragment>
                        </CardBody>
                    </Card>


                    <Card>
                        <CardBody>
                            <div>

                                <h2>User ID:{id}</h2>
                                <h2>User Name:{name}</h2>
                                <h2>Phone:{phone}</h2>
                                <h2>email:{email}</h2>

                            </div>


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
export default Userdetails;