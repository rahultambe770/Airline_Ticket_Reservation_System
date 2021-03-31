import axios from "axios";
import React, { Fragment, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Card, CardBody, Col, Row, CustomInput, NavLink } from "reactstrap";
import Allcourse from "./ALLcourse";
import Axios from "axios";
import moment, { now } from 'moment';
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import PhoneInput from 'react-phone-number-input'
import { TimePicker } from '@progress/kendo-react-dateinputs';
import DatePicker from "react-datepicker";

const Updateflight = () => {
    let history = useHistory();
    const [departureairport, setdepartureairport] = useState('');
    const [arrivalairport, setarrivalairport] = useState('');
    const [availableaeats, setavailableseats] = useState('');


    const [departuredate, setdeparturedate] = useState(new Date());
    const [arrivaldate, setarrivaldate] = useState('');
    const [departuretime, setdeparturetime] = useState('');
    const [arrivaltime, setarrivaltime] = useState('');
    const [flightvendor, setflightvendor] = useState('');
    const [coast, setcoast] = useState('');

    /* ----------------------------------------- */
    let dt = localStorage.getItem('flnumber');
    let dd = JSON.parse(dt);
    console.warn("current fl no=" + dd);
    /* ------------------------------------------------- */
    const handleForm = (e) => {
        // let dtime = moment(departuretime.value).format("hh:mm A");
        // console.log(moment(JSON.stringify(dtime), ["h.mm A"]).format("HH:mm"));

        //  console.log(date)
        e.preventDefault();
    };
    let atime = moment(arrivaltime.value).format("hh:mm A");
    console.log(moment(JSON.stringify(atime), ["h.mm A"]).format("HH:mm"));
    //--------------------------------------------------
    let dtime = moment(departuretime.value).format("hh:mm A");
    console.log(moment(JSON.stringify(dtime), ["h.mm A"]).format("HH:mm"));
    /* -------------------------------- */
    const fetchda = () => {
        /* id | firstname | lastname | password | gender | aboutyou */
        Axios.post("http://localhost:8086/admin/updateFlightDetails", {
            flightNumber:dd,
            arrivalAirport: arrivalairport,
            arrivalDate: (moment(arrivaldate).format("YYYY-MM-DD")),
            arrivalTime: moment(JSON.stringify(atime), ["h.mm A"]).format("HH:mm"),
            availableSeats: availableaeats,
            cost: coast,
            departureAirport: departureairport,
            departureDate: (moment(departuredate).format("YYYY-MM-DD")),
            departureTime: moment(JSON.stringify(dtime), ["h.mm A"]).format("HH:mm"),
            flightVendor: flightvendor



        }).then((Response) => {
            console.log(Response.data);
            if (Response.status === 200) {
                toast.success("Flight Updated ")
                const timer = setTimeout(() => {
                    history.push("/AllFlightsDetails");
                }, 3000);
                return () => clearTimeout(timer);
                /*  const timer = setTimeout(() => {
                     history.push("/Login");
                 }, 3000); 
                 return () => clearTimeout(timer);*/


            }
        });
    };
    //-------------------
    /* --------------------------------------- */
    return (
        <Card body inverse style={{ backgroundColor: '#c49618', borderColor: '#333' }}>
            <CardBody>
                <Fragment>
                    <Row>
                        <Col><NavLink onClick={() => history.push("/Adminhome")}>Admin Home</NavLink></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col><NavLink onClick={() => history.push("/Logout")}>Logout</NavLink></Col>
                    </Row>
                    <h1 className="text-center my-3">Update Flights</h1>
                    
                    <Form >

                        {/* ------------------------------------------ */}
                        <Col md={6}><FormGroup>
                            <label >Flight Number</label>
                            <Input disabled type="text" placeholder={dd} name="departureairport" id="departureairport"
                                onChange={(e) => {
                                    setdepartureairport(e.target.value);
                                }}
                            />
                        </FormGroup>
                        </Col>
                        {/* -------------------------------------------- */}
                        <Col md={6}><FormGroup>
                            <label >Departure Airport</label>
                            <Input type="text" placeholder="Enter Departure Airport here" name="departureairport" id="departureairport"
                                onChange={(e) => {
                                    setdepartureairport(e.target.value);
                                }}
                            />
                        </FormGroup>
                        </Col>
                        {/* ------------------------------------- */}
                        <Col md={6}>
                            <FormGroup>
                                <label >Arrival Airport</label>
                                <Input type="text" placeholder="Enter Arrival Airport here" name="arrivalairport" id="arrivalairport"
                                    onChange={(e) => {
                                        setarrivalairport(e.target.value);
                                    }}
                                />
                            </FormGroup>
                        </Col>
                        {/* ------------------------------------ */}
                        <Col md={6}>
                            <FormGroup>
                                <label >Available Seats</label>
                                <Input type="number" placeholder="Enter Available Seats here" name="availableseats" id="availableseats"
                                    onChange={(e) => {
                                        setavailableseats(e.target.value);
                                    }}
                                />
                            </FormGroup>
                        </Col>
                        {/* -------------------------- */}
                        <Col md={6}>
                            <FormGroup>
                                <label >Flight Vendor</label>
                                <Input type="text" placeholder="Enter Flight Vendor here" name="flightvendor" id="flightvendor"
                                    onChange={(e) => {
                                        setflightvendor(e.target.value);
                                    }}
                                />
                            </FormGroup>
                        </Col>
                        {/* --------------------------------- */}

                        <Col md={6}>
                            <FormGroup>
                                <label >Departure Date</label><br></br>
                                <DatePicker selected={departuredate} format="yyyy-MM-dd" onChange={date => setdeparturedate(date)} />
                            </FormGroup>
                        </Col>
                        {/* ----------------------------------- */}
                        <Col md={6}>
                            <FormGroup>
                                <label >Arrival Date</label><br></br>
                                <DatePicker selected={arrivaldate} format="yyyy-MM-dd" onChange={date => setarrivaldate(date)} />
                            </FormGroup>
                        </Col>
                        {/* ------------------------------- */}



                        <Col md={6}>
                            <FormGroup>
                                <label >Departure Time</label><br></br>{/* setarrivaltime */}

                                <TimePicker
                                    selected={departuretime} /* format="yyyy-MM-dd" */ onChange={time => setdeparturetime(time)}
                                />


                            </FormGroup>
                        </Col>
                        {/* --------------- */}



                        <Col md={6}>
                            <FormGroup>
                                <label >Arrival Time</label><br></br>{/* setarrivaltime */}

                                <TimePicker
                                    selected={arrivaltime} /* format="yyyy-MM-dd" */ onChange={time => setarrivaltime(time)}
                                />


                            </FormGroup>
                        </Col>
                        {/* ------------------------------------------- */}
                        <Col md={6}>
                            <FormGroup>
                                <label >Ticket Price</label>
                                <Input type="number" placeholder="Enter Ticket Price here" name="coast" id="coast"
                                    onChange={(e) => {
                                        setcoast(e.target.value);
                                    }}
                                />
                            </FormGroup>
                        </Col>

                        {/* ------------------------------- */}

                        <Container className='text-center'>
                            <Button onClick={fetchda} color="success mr-5">Update Flight</Button>
                            <NavLink onClick={() => history.push("/Adminhome")}>Home</NavLink>
                            {/* <Button type="reset" color="warning ">Clear</Button>
                            <Button onClick={() => history.push("/")} color="info ml-5">Home</Button>
 */}
                        </Container>

                    </Form>
                </Fragment>
            </CardBody>
        </Card>

    )


}
export default Updateflight;