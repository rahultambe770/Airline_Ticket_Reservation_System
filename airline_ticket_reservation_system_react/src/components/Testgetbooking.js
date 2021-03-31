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


const Testgetbooking = () => {
    let history = useHistory();
    const [flightdetails, setflightdetails] = useState([]);
    const [id, setid] = useState('');
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
            console.log("data="+response.data);
            setflightdetails(response.data)
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


                <NavLink href="#">Passenger Details</NavLink>
                <NavLink href="#">Flight Details</NavLink>
                <NavLink href="#">Delete</NavLink>
            </tr>
        )
    }
    return (

        <Card body inverse style={{ backgroundColor: '#c9b369', borderColor: '#333' }} >
            <CardBody>
                <Fragment>
                    <h1 className="text-center my-3">Booking Details</h1>
                    <Row>
                        <Col></Col>
                        <Col></Col>
                        <Col></Col>
                        <Col><NavLink style={{ color: '#ba1849', textDecoration: 'none' }} onClick={() => history.push("/Userhome")}>Home</NavLink>{' '}</Col>

                    </Row>

                    <Form >
                        <Container className='text-center'>
                            <Table dark striped>
                                <thead>
                                    <tr>
                                        {/* booking Id	flight Number	Amount	booking Date	Booking Time	action */}
                                        <th>booking Id</th>
                                        <th>flight Number</th>
                                        <th>Amount</th>
                                        <th>booking Date</th>
                                        <th>Booking Time</th>
                                        {/* <th>ArrivalTime</th>
                                        <th>DepartureTime</th> */}
                                        <th>action</th>

                                    </tr>
                                </thead>
                                <tbody>
                                    {flightdetails.map(renderFlights)}                                  </tbody>
                            </Table>
                        </Container>
                    </Form>
                </Fragment>
            </CardBody>
        </Card>

    )


}
export default Testgetbooking;
