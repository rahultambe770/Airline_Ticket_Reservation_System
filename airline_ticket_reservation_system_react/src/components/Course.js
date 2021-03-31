import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container
} from 'reactstrap';
import Axios from "axios"

const Course = ({ course,update }) => {
/* -------------------------- */
    const deleteCourse = (id) => {
        Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
            update(id);
            /* setEmployeeList(
                employeeList.filter((val) => {
                    return val.id != id;
                })
            ); */
        });
    };

    /* ------------------- */
    return (
        <Card>
            <CardBody className='text-center'>
                <CardSubtitle>{course.title} </CardSubtitle>
                <CardText>ID::{course.id}</CardText>
                <CardText><h4>Course description::</h4>{course.de}</CardText>
                <Container className='text-center'>
                    <Button color='danger'
                        onClick={() => {

                            deleteCourse(course.id);

                        }}


                    >Delete</Button>
                    <Button color='warning ml-3'>Update</Button>
                </Container>
            </CardBody>

        </Card>

    )

}
export default Course;