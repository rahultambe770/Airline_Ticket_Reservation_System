import axios from "axios";
import "../App.css"
import React, { Fragment, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Card, CardBody, Col, ButtonToggle, Row, NavLink, Table } from "reactstrap";
import Allcourse from "./ALLcourse";
import Axios from "axios";
import moment from 'moment';
import DatePicker from "react-datepicker";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

/* import { toast } from "react-toastify"; */
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";
import styled, { css } from 'styled-components'
import "react-datepicker/dist/react-datepicker.css";
/* ------------------------------------------------------------------------ */
const Userhome = () => {
    //--------------------date range-------------
    let datee = new Date();
    // add a day
    datee.setDate(datee.getDate() + 3);
    //--------------------------------
    const [bookflight, setbookflight] = useState('');
    let v = "hello";
    let obj = {
        flightNumber: v
    }



    /* ------------------------- */
    let history = useHistory();
    const [source, setsource] = useState('');
    const [desti, setdesti] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [flightdetail, setflightdetail] = useState(new Date());
    var date = moment(startDate).format("YYYY-MM-DD")
    //--------------------------
    const [flightdetails, setflightdetails] = useState([]);
    //-----------------------------
    let data = localStorage.getItem('mydata');
    let d = JSON.parse(data);

    const [msg, setmsg] = React.useState(
        d.name || ''
    );


    /* ----------------------------------------- */
    const handleForm = (e) => {
        // setbookflight("123");
        // console.log(bookflight);
        // console.log("called");


        // console.log(moment(startDate).format("YYYY-MM-DD"));
        // /*  console.log("Date: " + moment(startDate).format("YYYY-MM-DD")); */
        // console.log(desti);
        e.preventDefault();
    };
    /* ---------------------------------- */
    //----------------------check-------------------
    const setData = () => {
        let ob = {
            flightNumber: this.flightNumber
        }
        localStorage.setItem('myfl', JSON.stringify(ob));
    }
    //console.log(response.data);

    /* ----------------------------------------- */

    const fetchData = () => {
        Axios.get("http://localhost:8086/user/findFlight/" + desti + '/' + source + '/' + moment(startDate).format("YYYY-MM-DD"))
            .then((response) => {


                // let obj = {
                //     flightNumber: v
                // }
                // localStorage.setItem('myflight', JSON.stringify(obj));
                 console.log(response.data.length);
                setflightdetails(response.data)

                if (response.data.length>0) {
                    { setShow1(true) }
                    { setShow(true) }
                }
                else {
                    { setShow1(true) }
                    { setShow(false) }
                }

                /*   let obj = { name: response.data.userName }
                  localStorage.setItem('mydata', JSON.stringify(obj)); */
                /* --------------------------------- */
                /* let data = localStorage.getItem('mydata');
                let d = JSON.parse(data);
                console.warn(d.name); */
                /* ----------------------------------- */
                // toast.success(" hi '" + response.data.userName + "' Login successfull !!");
                // toast.warn("Redirecting you to details.")


            }, (error) => {
                console.log(error);
                {
                    { setShow1(true) }
                    { setShow(false) }
                }


            });
    };
    //----------------------------
    const Button = styled.button`
  background: solid;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: green;
  margin: 5px -5px;
  padding: 5px 5px;`


    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)
    //----------------------------------------
    const renderFlights = (flight, index) => {
        return (
            <tr key={index}>
                <td>{flight.flightNumber}</td>
                <td>{flight.arrivalDate}</td>
                <td>{flight.arrivalTime}</td>
                <td>{flight.departureAirport}</td>
                <td>{flight.departureDate}</td>
                <td>{flight.arrivalAirport}</td>
                <td>{flight.departureTime}</td>
                <td>{flight.flightVendor}</td>
                <td>{flight.cost}</td>

               
                <td><button style={{ height: '50px', width: '100px' }} value={flight.flightNumber} onClick={(e) => {
                    v = e.target.value;
                    // alert(e.target.value)
                    localStorage.setItem('myflight', JSON.stringify(v));

                    //  handleForm();
                    //   let obj = {
                    //                 flightNumber: v
                    //             }
                    //alert(v);
                    history.push("/Addpassenger");
                }}
                >
                    Book Ticket
    </button></td>
            </tr>
        )
    }
    //-----------------------------------------
    let stat = localStorage.getItem('status');
    let sta = JSON.parse(stat);
   // toast.success(sta);
    //--------------------------------------------
    return (
        <div>
            {  sta ?

                <div>
                    <Card body inverse style={{ width: "100%", backgroundColor: '#7c9191', borderColor: '#333' }} >
                        <CardBody>
                            <Fragment>
                                <div>
                                    <h2 Color='purple'>Welcome :: {msg}</h2>
                                    <hr></hr>
                                    </div>
                                <br></br>
                                <Card><CardBody>
                                    <Row>
                                        <Col><NavLink color="primary" onClick={() => history.push("/Getbooking")}>view Bookings</NavLink>{' '}</Col>
                                        <Col><NavLink color="primary" onClick={() => history.push("/Userdetails")}>view Details</NavLink>{' '}</Col>
                                        <Col><NavLink color="primary" onClick={() => history.push("/Updatedetails")}>Update details</NavLink>{' '}</Col>
                                        <Col><NavLink color="primary" onClick={() => history.push("/Logout")}>Logout</NavLink>{' '}</Col>
                                    </Row>

                                </CardBody>  </Card>

                                <br />
                                <Form >
                                    {/* ------------------------------------- */}
                                    <Container>
                                        <Row>
                                            <Col xs="6" sm="4">

                                                <FormGroup>
                                                    <label className="center">From</label>
                                                    <Input type="text" placeholder="Departure Airport"
                                                        name="From" id="From"
                                                        onChange={(e) => {
                                                            setsource(e.target.value);
                                                        }}
                                                    />
                                                </FormGroup>



                                            </Col>
                                            <Col xs="6" sm="4">
                                                <FormGroup>
                                                    <label className="center">To</label>
                                                    <Input type="text" placeholder="Arrival Airport"
                                                        name="From" id="From"
                                                        onChange={(e) => {
                                                            setdesti(e.target.value);
                                                        }}
                                                    />
                                                </FormGroup>

                                            </Col>
                                            <Col sm="4">
                                                <FormGroup>
                                                    <label >Date</label><br></br>
                                                    <DatePicker selected={startDate} format="yyyy-MM-dd"

                                                        minDate={new Date()}
                                                        maxDate={datee}

                                                        onChange={date => setStartDate(date)} />
                                                </FormGroup>
                                            </Col>
                                        </Row>
                                    </Container>
                                    {/* --------------------------------------- */}

                                    <Container className='text-center'>


                                        <Row><br />
                                            <Col ><ButtonToggle style={{ height: '50px', width: '100px' }} onClick={fetchData} color="success mr-25" >Search</ButtonToggle></Col>


                                        </Row>
                                        <br></br>


                                        {
                                            show1 ?
                                                <div>{
                                                    show ?

                                                        <div>
                                                            <Table bordered>
                                                                <thead>
                                                                    <tr>
                                                                        <th>Flight Number</th>
                                                                        <th>Arrival Date</th>
                                                                        <th>Arrival Time</th>
                                                                        <th>Departure Airport</th>
                                                                        <th>Arrival Airport</th>
                                                                        <th>Departure Date</th>
                                                                        <th>Departure Time</th>
                                                                        <th>Flight Vendor</th>
                                                                        <th>Cost</th>
                                                                        <th></th>


                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    {flightdetails.map(renderFlights)}
                                                                </tbody>
                                                            </Table>
                                                        </div>
                                                        : <h3>No flights available</h3>
                                                }
                                                </div>
                                                : null
                                        }
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
        </div >
    )


}
export default Userhome;