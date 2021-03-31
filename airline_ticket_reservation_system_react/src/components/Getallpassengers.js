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


const Getallpassengers = () => {
    let history = useHistory();
    const [flightdetails, setflightdetails] = useState([]);

    /* ----------------------------------------- */
    const handleForm = (e) => {

        e.preventDefault();
    };
    /* -------------------------------- */


    const fetchdata = () => {

        Axios.get("http://localhost:8086/admin/getAllPassengers"
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
                <td>{flight.passengerId}</td>
                <td>{flight.name}</td>
                <td>{flight.age}</td>
                <td>{flight.luggage}</td>

            </tr>
        )
    }
    //----------------------------------
    let stat = localStorage.getItem('status1');
    let sta = JSON.parse(stat);
    //--------------------------------------
    return (

        <div>
            {  sta ?
                <div>
                    <Card body inverse style={{ backgroundColor: '#c9b369', borderColor: '#333' }} >
                        <CardBody>
                            <Fragment>

                                <Container>

                                    <Row>
                                        <Col><NavLink onClick={() => history.push("/Adminhome")}>Admin Home</NavLink></Col>
                                        <Col></Col>
                                        <Col></Col>
                                        <Col><NavLink onClick={() => history.push("/Logout")}>Logout</NavLink></Col>
                                    </Row>
                                </Container>
                                <h1 className="text-center my-3">All Passengers Details</h1>
                                <Form >
                                    <Container className='text-center'>
                                        <Table striped>
                                            <thead>
                                                <tr>
                                                    <th>Passenger Id</th>
                                                    <th>Name</th>
                                                    <th>Age</th>
                                                    <th>Luggage</th>

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
        </div>
    )


}
export default Getallpassengers;