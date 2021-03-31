import axios from "axios";
import React, { Fragment, useState } from "react";
import { Button, Container, Form, FormGroup, Input, Card, CardBody, Col, ButtonToggle, Row, Spinner, NavLink } from "reactstrap";
import Allcourse from "./ALLcourse";
import Axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';


const Addpassenger = () => {

    const [lugErr, setlugErr] = useState(false);
    /* ------------------------------------- */

    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), name: '', luggage: '', age: '' },
    ]);
    /* ------------------------------------------ */
    const [passengers, setpassengers] = useState([
        { id: uuidv4(), nName: '', luggage: '', age: '' },
    ]);
    /* --------------------------------------------- */
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("InputFields", inputFields);
    };

    const handleChangeInput = (id, event) => {
        const newInputFields = inputFields.map(i => {
            if (id === i.id) {
                i[event.target.name] = event.target.value
            }
            return i;
        })

        setInputFields(newInputFields);
        setpassengers(newInputFields);
    }

    const handleAddFields = () => {
        setInputFields([...inputFields, { id: uuidv4(), name: '', luggage: '', age: '' }])
    }

    const handleRemoveFields = id => {
        const values = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
    }
    /* -------------------------------------- */
    let history = useHistory();
    const [passName, setpassName] = useState('');
    const [passAge, setpassAge] = useState('');
    const [passLuggage, setpassLuggage] = useState('');

    const [msg, setmsg] = useState('');
    /* ----------------------------------------- */
    let data = localStorage.getItem('mydata');
    let d = JSON.parse(data);
    console.warn(d.name);
    console.warn("id==" + d.id);
    //----------------------------------------------
    let dt = localStorage.getItem('myfl');
    let dd = JSON.parse(dt);
    //------------------------------------------------
    let dat = localStorage.getItem('myflight');
    let da = JSON.parse(dat);
    console.warn("fln=" + da);
    const handleForm = (e) => {
        console.warn(d.id);
        e.preventDefault();
    };
    //-------------------------------
    let datt = localStorage.getItem('myid');
    let ddd = JSON.parse(dat);
    console.log("uid=" + ddd.uid);

    /* -------------------------------- */
    let uid = localStorage.getItem('myid');
    let uiid = JSON.parse(uid);
    //---------------------------------------
    const fetchdata = () => {

        Axios.post("http://localhost:8086/user/addBooking/" + uiid.uid/* d.id */ + "/" + da, {

            passengers
        }).then((response) => {
            console.log(response.data.bookingId);
            let ob = {
                bookingid: response.data.bookingId
            }
            localStorage.setItem('bookingid', JSON.stringify(ob));

            toast.warn("Passengers Added .")
            const timer = setTimeout(() => {
                history.push("/Receipt");
            }, 3000);
            return () => clearTimeout(timer);

        }, (error) => {
            console.log(error);

        });
    };

    function luggageHandler(e) {
        let item = e.target.value;
        if (item.length < 8) {
            setlugErr(true)
        }
        else {
            setlugErr(false)
        }
        // setPassword(item)
        //setpasswordReg(item);
    }
    //------------------------------
    let stat = localStorage.getItem('status');
    let sta = JSON.parse(stat);
    //----------------------------
    return (
        <div>
            {  sta ?


 
            <div>
                <Card body inverse style={{ backgroundColor: '#919bb8', borderColor: '#333' }} >
                    <CardBody>
                        <Fragment>

                            <h1 className="text-center my-3">Add Passengers</h1>
                            <Container>
                                <Row>
                                    <Col xs="6" sm="4"><NavLink color="success" onClick={() => history.push("/Logout")} >Logout</NavLink></Col>
                                    <Col xs="6" sm="4"></Col>
                                    <Col sm="4"> <NavLink color="success" onClick={() => history.push("/Userhome")} >Home</NavLink>
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

                <Card>
                    <CardBody>
                        <h2 className="text-left my-3">Add Passengers</h2>
                        <Card><CardBody>
                            <NavLink style={{ height: '80px', width: '200px', Color: '#a85032' }} onClick={handleAddFields}> ADD   MORE PASSENGER </NavLink><br /></CardBody></Card>
                        <Container>
                            <form onSubmit={handleSubmit}>
                                {inputFields.map(inputField => (
                                    <div key={inputField.id}>
                                        <Card style={{ backgroundColor: '#6fe382', borderColor: '#333' }} >
                                            <CardBody>
                                                <h2>passenger:</h2>
                                                <Row>
                                                    <Col xs="6" sm="4">
                                                        <FormGroup>
                                                            <label >First Name</label>
                                                            <Input type="text" placeholder="Enter Name  here"
                                                                name="name" id="name" value={inputField.name}
                                                                onChange={event => handleChangeInput(inputField.id, event)}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col xs="6" sm="4">
                                                        <FormGroup>
                                                            <label >Luggage</label>
                                                            <Input type="number" placeholder="Enter Luggage  here"
                                                                name="luggage" id="luggage" value={inputField.luggage}

                                                                onChange={event => handleChangeInput(inputField.id, event)}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col sm="4"><FormGroup>
                                                        <label >Age</label>
                                                        <Input type="number" placeholder="Enter Age  here"
                                                            name="age" id="age" value={inputField.age}
                                                            onChange={event => handleChangeInput(inputField.id, event)}
                                                        />
                                                    </FormGroup></Col>
                                                </Row>
                                                <tr></tr>
                                                <Button style={{ height: '50px', width: '100px', backgroundColor: '#751068' }} disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}> Remove  </Button>
                                                <tr /> <tr /> </CardBody>
                                        </Card>
                                    </div>
                                ))}
                            </form><br />
                        </Container>
                    </CardBody>
                </Card>
                <card><CardBody> <Button style={{ height: '50px', width: '150px' }} color="primary" type="submit" onClick={fetchdata}>Confirm Booking</Button></CardBody></card>
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
export default Addpassenger;