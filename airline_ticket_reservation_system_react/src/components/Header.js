import React from "react";
import { Card, CardBody } from "reactstrap";
import img from '../comp/logo.png'



function Header({ name, title }) {
    return (
        <div>
            <Card style={{ backgroundColor: '#d8d9ce', height: 150}} >
                <img style={{width:200}}src={img} alt="" />
                <CardBody><h1 className="text-center ">Airline Ticket Reservation System</h1>
                </CardBody>
            </Card>

        </div>

    );

}

export default Header;