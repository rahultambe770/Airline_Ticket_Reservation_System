import e from "cors";
import React from "react";
import { Card, CardBody } from "reactstrap";
import { useHistory } from "react-router-dom";
import { Button, Container, Form, FormGroup, Input,  Col, ButtonToggle, Row, NavLink, } from "reactstrap";

const Log = () => {

   let status = false;
    localStorage.setItem('status', "false");
    localStorage.setItem('status1', "false");
    let history = useHistory();
    return (
        <div>
            <h1>Log in to continue</h1>
            <NavLink onClick={() => history.push("/")}>Login</NavLink>
           

        </div>

    );

}

export default Log;