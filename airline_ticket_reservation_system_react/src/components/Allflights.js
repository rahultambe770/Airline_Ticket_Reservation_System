import axios from "axios";
import "../App.css"
import React, { Fragment, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Card, CardBody, Col, ButtonToggle, Row, NavLink, } from "reactstrap";
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
    let history = useHistory();
    const [source, setsource] = useState('');
    const [desti, setdesti] = useState('');
    const [startDate, setStartDate] = useState(new Date());
    const [flightdetail, setflightdetail] = useState(new Date());
    var date = moment(startDate).format("YYYY-MM-DD")

    let data = localStorage.getItem('mydata');
    let d = JSON.parse(data);

    const [msg, setmsg] = React.useState(
        d.name || ''
    );
//----------------------check-------------------
    // let ob = {
    //     flightNumber: this.flightNumber
    // }
    // localStorage.setItem('myfl', JSON.stringify(ob));
    //console.log(response.data);

    /* ----------------------------------------- */
    const handleForm = (e) => {
        console.log(source);
        console.log(moment(startDate).format("YYYY-MM-DD"));
        /*  console.log("Date: " + moment(startDate).format("YYYY-MM-DD")); */
        console.log(desti);
        e.preventDefault();
    };
    /* ---------------------------------- */
      
    const fetchData = () => {
                Axios.get("http://localhost:8086/user/findFlight/" + desti + '/' + source + '/' + moment(startDate).format("YYYY-MM-DD"))
            .then((response) => {

               
                let obj = {
                    flightNumber: response.data.flightNumber
                }
                localStorage.setItem('myflight', JSON.stringify(obj));
                console.log(response.data);
                setflightdetail(response.data[0])

                if (response.status === 200) { 
                    { setShow1(true) } 
                    { setShow(true) }
                }
                else {
                    { setShow1(true) }
                    { setShow(false) } }

                /*   let obj = { name: response.data.userName }
                  localStorage.setItem('mydata', JSON.stringify(obj)); */
                /* --------------------------------- */
                /* let data = localStorage.getItem('mydata');
                let d = JSON.parse(data);
                console.warn(d.name); */
                /* ----------------------------------- */
                toast.success(" hi '" + response.data.userName + "' Login successfull !!");
                toast.warn("Redirecting you to details.")


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
    return (


        <Card body inverse style={{ backgroundColor: '#8c9184', borderColor: '#333' }} >
            <CardBody>
                <Fragment><div>


                    <h1>Welcome :: {msg}</h1></div>
                    <Card><CardBody>
                        <Row>
                            <Col><NavLink color="primary" onClick={() => history.push("/Getbooking")}>view Bookings</NavLink>{' '}</Col>
                            <Col><NavLink color="primary" onClick={() => history.push("/Userdetails")}>view Details</NavLink>{' '}</Col>
                            <Col><NavLink color="primary" >Update details</NavLink>{' '}</Col>
                            <Col><NavLink color="primary" >Logout</NavLink>{' '}</Col>
                        </Row>
                        
                        
                        
                        
                    </CardBody>  </Card>

                    {/*   <h1 className="text-center my-3">Login</h1> */}
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
                                        <label className="center">From</label>
                                        <Input type="text" placeholder="Departure Airport"
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
                                        <DatePicker selected={startDate} format="yyyy-MM-dd" onChange={date => setStartDate(date)} />
                                        </FormGroup>
                                </Col>
                            </Row>
                        </Container>
                        {/* --------------------------------------- */}
                        
                        <Container className='text-center'>


                            <Row><br />
                                <Col ><ButtonToggle onClick={fetchData} color="success mr-25" >Search</ButtonToggle></Col>
                                {/* <Col> <ButtonToggle type="reset" color="warning ">Clear</ButtonToggle></Col>
                                <Col> <ButtonToggle onClick={() => history.push("/")} color="info ">Home</ButtonToggle> </Col>
                                <Col><ButtonToggle onClick={() => history.push("/Register")} color="info my-4">Register</ButtonToggle> </Col>
 */}
                            </Row>

                            
                            
                            {
                                show1 ?
                                    <div>{
                                        show ?

                                            <div>

                                                <h4>FlightNumber:{flightdetail.flightNumber}</h4>
                                                <h4>ArrivalDate:{flightdetail.arrivalDate}</h4>
                                                <h4>ArrivalTime:{flightdetail.arrivalTime}</h4>
                                                <h4>DepartureAirport:{flightdetail.departureAirport}</h4>
                                                <h4>DepartureDate:{flightdetail.departureDate}</h4>
                                                <h4>DepartureTime:{flightdetail.departureTime}</h4>
                                                <h4>FlightVendor:{flightdetail.flightVendor}</h4>
                                                <h4>Cost:{flightdetail.cost}</h4>
                                                <Button onClick={() => history.push("/Addpassenger")}  color="warn">Add Passenger</Button>
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

    )


}
export default Userhome;