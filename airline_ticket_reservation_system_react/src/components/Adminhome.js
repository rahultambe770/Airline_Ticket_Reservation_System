import axios from "axios";
import React, { Fragment, useState } from "react";
import { Button, Container, Form, FormGroup, Input, NavLink, Card, CardBody, Col, ButtonToggle, Row, Spinner, } from "reactstrap";
import Allcourse from "./ALLcourse";
import Axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";



const Adminhome = () => {
    let history = useHistory();
    const [passName, setpassName] = useState('');
    const [passAge, setpassAge] = useState('');
    const [passLuggage, setpassLuggage] = useState('');

    const [msg, setmsg] = useState('');
    /* ----------------------------------------- */

    let data = localStorage.getItem('admindata');
    let d = JSON.parse(data);
    console.warn(d.name);
    console.warn(d.id);
    const handleForm = (e) => {
        console.warn(d.id);
        e.preventDefault();
    };


    /* -------------------------------- */
    var passengers =
    {
        "Passenger": [
            {

                "name": "Ram",
                "age": 2,
                "luggage": 12
            }
        ]
    };
    const fetchdata = () => {

        Axios.post("http://localhost:8086/user/addBooking/", {
            "passengers": [{ "name": passName, "age": passAge, "luggage": passLuggage }]

        }).then((response) => {
            console.log(response.data);

            toast.success(" hi '" + response.data.userName + "' Login successfull !!");
            toast.warn("Redirecting you to details.")
        }, (error) => {
            console.log(error);
        });
    };
    //--------------------------
    //localStorage.setItem('status', "true");
    let stat = localStorage.getItem('status1');
    let sta = JSON.parse(stat);
    console.log(sta);
    //----------------------------
    return (
        <div>
            {  sta ?
        <div>
            <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }} >
                <CardBody>
                    <Fragment>

                        <h1 className="text-center my-3">Welcome Admin</h1>
                        <Container>Admin Name: {d.name}
                            <br></br>
                            <Row>
                                <Col xs="6" sm="4"> </Col>
                                <Col xs="6" sm="4"><NavLink onClick={() => history.push("/Logout")} color="info ml-5">Logout</NavLink></Col>
                                <Col sm="4"> <NavLink color="success" onClick={() => history.push("/")} >Home</NavLink>
                                </Col>
                            </Row>

                        </Container>
                        <Form >

                            <Container className='text-center'>

                            </Container>

                        </Form>
                    </Fragment>
                </CardBody>
            </Card>


            <Container>

                <br></br>
                <Row>
                    <Col xs="5">{/* Addflights */}
                        <Button onClick={() => history.push("/Addflights")} color="warning mr-25" >Add Flight Details</Button>
                    </Col>
                    <Col xs="1"></Col>
                    <Col xs="5">
                        <Button onClick={() => history.push("/AllFlightsDetails")} color="warning">View Flights</Button>
                    </Col>
                </Row>
                <br></br>

                <Row>
                    <Col xs="5">{/* Addflights */}
                        <Button onClick={() => history.push("/Getallpassengers")} color="warning mr-25" >All Passengers Details</Button>
                    </Col>
                    <Col xs="1"></Col>
                    <Col xs="5">
                        <Button onClick={() => history.push("/AllFlightsDetails")} color="warning">View Flights</Button>
                    </Col>
                </Row>
            </Container>
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
export default Adminhome;