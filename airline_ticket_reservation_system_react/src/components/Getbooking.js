import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { Button, Container, Form, FormGroup, Input, Card, CardBody, Col, ButtonToggle, Row, NavLink, } from "reactstrap";
import Allcourse from "./ALLcourse";
import Axios from "axios";
import moment from 'moment';
/* import { toast } from "react-toastify"; */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";
import { Table } from 'reactstrap';


const Getbooking = () => {
    let history = useHistory();
    const [flightdetails, setflightdetails] = useState([]);
    const [id, setid] = useState('');
    const [passengerdetails, setpassengerdetails] = useState([]);
    const [flghtdetails, setflghtdetails] = useState([]);
    let v = "hi"
    let w = "hi"
    let x = "hi"
    let y = "hi"
    /* ----------------------------------------- */
    const handleForm = (e) => {

        e.preventDefault();
    };
    /* -------------------------------- */
    let data = localStorage.getItem('mydata');
    let d = JSON.parse(data);

    const [msg, setmsg] = React.useState(
        d.id || ''
    );
    //--------------------------------------
    let dat = localStorage.getItem('myid');
    let da = JSON.parse(dat);
    console.log("huu=" + da.uid);

    //--------------------------------------
    const fetchdata = () => {

        Axios.get("http://localhost:8086/user/getBookingByUser/" + da.uid
        ).then((response) => {
            console.log("data=" + response.data);
            setflightdetails(response.data)
        }, (error) => {
            console.log(error);
        });
    };
    // -------------------------passenger detais----
    const fetchpassengers = () => {

        Axios.get("http://localhost:8086/admin/getPassengerByBooking/" + v
        ).then((response) => {
            //alert(v);
            console.log(response.data);
            setpassengerdetails(response.data)
        }, (error) => {
            console.log(error);
        });
    };
    //---------------------------------------
    const fetchflights = () => {

        Axios.get("http://localhost:8086/user/getFlightByNumber/" + w
        ).then((response) => {
            //alert(v);
            console.log(response.data);
            setflghtdetails(response.data)
        }, (error) => {
            console.log(error);
        });
    };
    //---------------------------------------
    const deletebooking = () => {

        Axios.delete("http://localhost:8086/user/deleteBooking/" + x + "/" + da.uid
        ).then((response) => {
            alert("deleted");
            console.log(response.data);
            window.location.reload(false);
            //setflghtdetails(response.data)
        }, (error) => {
            console.log(error);
        });
    };
    //---------------------------------------


    useEffect(() => {
        fetchdata();
        //handleForm();
    }, [])
    /* -------------------------------- */

    const renderFlights = (flight, index) => {
        return (
            <tr key={index}>
                <td>{flight.bookingId}</td>
                <td>{flight.flightNumber}</td>
                <td>{flight.totalCost}</td>
                <td>{flight.bookingDate}</td>
                <td>{flight.bookingTime}</td>

                <td><Button style={{ height: '40px', width: '150px' }} value={flight.flightNumber} onClick={(e) => {
                    w = e.target.value;
                    fetchflights();
                    setShow(true);
                    setShow1(false);
                    setShow2(true);
                    // alert(e.target.value)
                }}
                > Flight Details</Button></td>
                <td><Button style={{ height: '40px', width: '150px' }} value={flight.bookingId} onClick={(e) => {
                    x = e.target.value;

                    deletebooking();
                    // window.location.reload(false);
                    // alert(e.target.value)
                }}
                > Delete</Button></td>
                <td><Button style={{ height: '40px', width: '150px' }} value={flight.bookingId} onClick={(e) => {
                    v = e.target.value;
                    fetchpassengers();
                    setShow(true);
                    setShow2(false);
                    setShow1(true);
                    // alert(e.target.value)
                }}
                > Passenger Details</Button></td>

            </tr>
        )
    }
    /* ----------------render passenger---------- */
    const renderpassenger = (flight, index) => {
        return (
            <tr key={index}>
                <td>{flight.passengerId}</td>
                <td>{flight.name}</td>
                <td>{flight.age}</td>
                <td>{flight.luggage}</td>

             {/*    <NavLink href="#">Update Passenger</NavLink> */}

            </tr>
        )
    }
    /* ------------------------flight details------------------------------------- */
    const renderflght = (flight, index) => {
        return (
            <tr key={index}>
                <td>{flight.flightNumber}</td>
                <td>{flight.name}</td>
                <td>{flight.age}</td>
                <td>{flight.luggage}</td>

                <NavLink href="#">Update Passenger</NavLink>

            </tr>
        )
    }
    /* -----------hide/show------- */
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    const [show2, setShow2] = useState(false)
    /* ---------------------------- */
    let stat = localStorage.getItem('status');
    let sta = JSON.parse(stat);
    /* -------------------------------------- */
    return (
        <div>
            {
                sta?
                        <div>
                <Card body inverse style={{ backgroundColor: '#c9b369', borderColor: '#333' }} >
                    <CardBody>
                        <Fragment>
                            <h1 className="text-center my-3">Booking Details</h1>
                            <Row>
                                        <Col><NavLink style={{ color: '#ba1849', textDecoration: 'none' }} onClick={() => history.push("/Logout")}>Logout</NavLink></Col>
                                <Col></Col>
                                <Col></Col>
                                <Col><NavLink style={{ color: '#ba1849', textDecoration: 'none' }} onClick={() => history.push("/Userhome")}>Home</NavLink>{' '}</Col>

                            </Row>

                            <Form >
                                <Container className='text-center'>
                                    <Table dark striped>
                                        <thead>
                                            <tr>

                                                <th>booking Id</th>
                                                <th>flight Number</th>
                                                <th>Amount</th>
                                                <th>booking Date</th>
                                                <th>Booking Time</th>
                                                <th>action</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            {flightdetails.map(renderFlights)}                                  </tbody>
                                    </Table>
                                </Container>
                            </Form>
                        </Fragment>


                        {/* -----hide show------------ */}
                        {
                            show ?
                                <div>
                                    {
                                        show1 ?
                                            <div>
                                                {/* ---passenger details-- */}

                                                <Card>
                                                    <CardBody>
                                                        <Fragment>

                                                            <Form >
                                                                <Container className='text-center'>
                                                                    <Table striped>
                                                                        <thead><h2>Passengers Details</h2>
                                                                            <tr>
                                                                                <th>Passenger Id</th>
                                                                                <th>Passenger Name</th>
                                                                                <th>Passenger Age</th>
                                                                                <th>Passenger Luggage</th>

                                                                                {/* <th>action</th> */}

                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            {passengerdetails.map(renderpassenger)}                                  </tbody>
                                                                    </Table>
                                                                </Container>
                                                            </Form>
                                                        </Fragment>

                                                    </CardBody>
                                                </Card>



                                            </div>
                                            : null

                                    }
                                    {
                                        show2 ?


                                            <div>
                                                <Card style={{ backgroundColor: '#36396b', borderColor: '#333' }}>  <CardBody>
                                                    <h2><u>Flight Details::</u></h2>
                                                    <br />
                                                    <h3>Flight No::     {flghtdetails.flightNumber}</h3>
                                                    <h3>From::          {flghtdetails.departureAirport}</h3>
                                                    <h3>To::            {flghtdetails.arrivalAirport}</h3>
                                                    <h3>Departure date::{flghtdetails.departureDate}</h3>
                                                    <h3>Departure Time::{flghtdetails.departureTime}</h3>
                                                    <h3>Arrival Date::  {flghtdetails.arrivalDate}</h3>
                                                    <h3>Arrival Time::  {flghtdetails.arrivalTime}</h3>


                                                </CardBody></Card>
                                            </div>



                                            : null

                                    }
                                </div>
                                : null
                        }
                        {/* ------------------------------------- */}
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
export default Getbooking;