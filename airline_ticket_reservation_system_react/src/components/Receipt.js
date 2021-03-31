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


const Receipt = () => {
    let history = useHistory();
    const [flightdetails, setflightdetails] = useState([]);
    const [id, setid] = useState('');
    const [passengerdetails, setpassengerdetails] = useState([]);
    const [flghtdetails, setflghtdetails] = useState([]);
    let v = "hi"
    let w = "hi"
    let x = "hi"
    let y = "hi"
    let abcd = "hi"
    const [fnumber, setfnumber] = useState([]);

    /* ----------------------------------------- */
    const handleForm = (e) => {

        e.preventDefault();
    };
    /* -------------------------------- */
    let data = localStorage.getItem('mydata');
    let d = JSON.parse(data);

    const [msg, setmsg] = React.useState(
        d.name || ''
    );
    //--------------------------------------
    let dat = localStorage.getItem('myid');
    let da = JSON.parse(dat);
    console.log("huu=" + da.uid);
    //---------------------------------------
    let datt = localStorage.getItem('bookingid');
    let ddd = JSON.parse(datt);
    console.log(ddd.bookingid);

    //--------------------------------------
    const fetchdata = () => {

        Axios.get("http://localhost:8086/user/getBookingByBookingId/" + ddd.bookingid
        ).then((response) => {
            console.log("Booking Details:");
            console.log(response.data);
            setpassengerdetails(response.data.passengers)
            abcd = response.data.flightNumber;
            setfnumber(response.data)
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

        Axios.get("http://localhost:8086/user/getFlightByNumber/" + abcd
        ).then((response) => {
            //alert(v);
            console.log("Flight Details:");
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
            setflghtdetails(response.data)
        }, (error) => {
            console.log(error);
        });
    };
    //---------------------------------------


    useEffect(() => {
        fetchdata();


        const timer = setTimeout(() => {
            fetchflights();
        }, 2000);
        return () => clearTimeout(timer);

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
                }}
                > Flight Details</Button></td>
                <td><Button style={{ height: '40px', width: '150px' }} value={flight.bookingId} onClick={(e) => {
                    x = e.target.value;

                    deletebooking();
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


    /* --------------------------- */
    return (


        <div>
            {  sta ?

                <div>

                    <Card body inverse style={{ /* backgroundColor: '#c9b369', */ borderColor: '#333' }} >
                        <CardBody>
                            <Fragment>
                                <h1 className="text-center my-3">Booking Confirmation</h1>
                                <Row>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col><NavLink style={{ color: '', textDecoration: 'none' }} onClick={() => history.push("/Userhome")}>Home</NavLink>{' '}</Col>
                                </Row>
                                <div>
                                    <div style={{ color: 'black' }} >
                                        <h1>Hi,{msg} </h1>
                                        <p> <h3>&nbsp; &nbsp;&nbsp; Your Booking Details:: </h3></p>

                                        <br></br>
                                    </div>
                                    <div className="text-center my-3" >

                                        <Table striped hover>

                                            <tbody>
                                                <tr>
                                                    <td>Flight Number :</td>
                                                    <td>{flghtdetails.flightNumber}</td>
                                                </tr>
                                                <tr>
                                                    <td>Departure Airport :</td>
                                                    <td>{flghtdetails.departureAirport}</td>
                                                </tr>

                                                <tr>
                                                    <td>Arrival Airport :</td>
                                                    <td>{flghtdetails.arrivalAirport}</td>
                                                </tr>
                                                <tr>
                                                    <td>Departure Date :</td>
                                                    <td>{flghtdetails.departureDate}</td>
                                                </tr>
                                                <tr>
                                                    <td>Arrival Date :</td>
                                                    <td>{flghtdetails.arrivalDate}</td>
                                                </tr>
                                                <tr>
                                                    <td>Arrival Time :</td>
                                                    <td>{flghtdetails.arrivalTime}</td>
                                                </tr>
                                                <tr>
                                                    <td>Departure Time :</td>
                                                    <td>{flghtdetails.departureTime}</td>
                                                </tr>.
                                    <tr>
                                                    <td>Flight Vendor :</td>
                                                    <td>{flghtdetails.flightVendor}</td>
                                                </tr>
                                                <tr>
                                                    <td>Booking Id :</td>
                                                    <td>{fnumber.bookingId}</td>
                                                </tr>
                                                <tr>
                                                    <td>Total coast :</td>
                                                    <td>{fnumber.totalCost}</td>
                                                </tr>




                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                                <Form >
                                    <Container className='text-center'>
                                        <Table dark striped>
                                            <thead>
                                                <tr>

                                                </tr>
                                            </thead>
                                            <tbody>
                                                {flightdetails.map(renderFlights)}                                  </tbody>
                                        </Table> <Table striped>
                                            <thead><h2>Passengers::</h2>
                                                <tr>
                                                    <th>Passenger Id</th>
                                                    <th>Passenger Name</th>
                                                    <th>Passenger Age</th>
                                                    <th>Passenger Luggage</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {passengerdetails.map(renderpassenger)}                                  </tbody>
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

                                                                                    <th>action</th>
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
export default Receipt;