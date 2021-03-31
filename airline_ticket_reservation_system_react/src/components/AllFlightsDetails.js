import axios from "axios";
import React, { Fragment, useState, useEffect } from "react";
import { Button, Container, Form, FormGroup, Input, Card, CardBody, Col, ButtonToggle, Row, NavLink, } from "reactstrap";
import Allcourse from "./ALLcourse";
import Axios from "axios";
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";
import { Table } from 'reactstrap';


const AllFlightsDetails = () => {
    let history = useHistory();
    const [flightdetails, setflightdetails] = useState([]);
    let flnumber = "hi";
    let delflight = "hi";
    /* ----------------------------------------- */
    const handleForm = (e) => {

        e.preventDefault();
    };
    /* -------------------------------- */

    /* ------------------------------------------ */
    const fetchdata = () => {

        Axios.get("http://localhost:8086/admin/getAllFlightDetails"
        ).then((response) => {
            console.log(response.data);
            setflightdetails(response.data)
        }, (error) => {
            console.log(error);
        });
    };
    //-----------------------------------------
    const deleteflights = () => {
toast.success("deleting")
        Axios.delete("http://localhost:8086/admin/deleteFlightDetails/" + delflight
        ).then((response) => {
            console.log(response.data);
            setflightdetails(response.data)
        }, (error) => {
            console.log(error);
        });
    };
    //---------------------------------------

    useEffect(() => {
        fetchdata();
    }, [])
    /* -------------------------------- */

    const renderFlights = (flight, index) => {
        return (
            <tr key={index}>
                <td>{flight.flightNumber}</td>
                <td>{flight.departureAirport}</td>
                <td>{flight.arrivalAirport}</td>
                <td>{flight.availableSeats}</td>
                <td>{flight.departureDate}</td>
                <td>{flight.arrivalDate}</td>

                <td>{flight.flightVendor}</td>
                <td>{flight.cost}</td>
                <td>

                    <button style={{ height: '30px', width: '75px' }} value={flight.flightNumber} onClick={(e) => {
                        delflight = e.target.value;
                        alert("Delete flight ::" + delflight);
                        deleteflights();
                        window.location.reload(false);
                        toast.success(" Fight '" + delflight + "' deleted successfully !!");
                    }} variant="link">Delete</button>


                    <br></br>  <button style={{ height: '30px', width: '75px' }} value={flight.flightNumber} onClick={(e) => {
                        flnumber = e.target.value;
                        localStorage.setItem('flnumber', JSON.stringify(flnumber));
                        alert("Update flight ::" + flnumber);
                        history.push("/Updateflight");
                    }} variant="link">Update</button></td>
            </tr>
        )
    }
    //----------------------------------------------
    let stat = localStorage.getItem('status1');
    let sta = JSON.parse(stat);
    //----------------------------------------------
    return (
        <div>
            {sta ?


                <div>
                    <Card body inverse style={{ backgroundColor: '#c9b369', borderColor: '#333' }} >
                        <CardBody>
                            <Fragment>
                                <Row>
                                    <Col><NavLink onClick={() => history.push("/Adminhome")}>Admin Home</NavLink></Col>
                                    <Col></Col>
                                    <Col></Col>
                                    <Col><NavLink onClick={() => history.push("/Logout")}>Logout</NavLink></Col>
                                </Row>


                                <h1 className="text-center my-3">Flights Details</h1>
                                <Form >
                                    <Container className='text-center'>
                                        <Table striped>
                                            <thead>
                                                <tr>
                                                    <th>Flight Number</th>
                                                    <th>Departure Airport</th>
                                                    <th>Arrival Airport</th>
                                                    <th>Available Seats</th>
                                                    <th>Departure Date</th>
                                                    <th>Arrival Date</th>
                                                    <th>Flight Vendor</th>
                                                    <th>Cost</th>
                                                    <th>Action</th>
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
export default AllFlightsDetails;