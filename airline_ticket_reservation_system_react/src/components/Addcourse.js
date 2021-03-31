import axios from "axios";
import React, { Fragment, useState } from "react";
import { Button, Container, Form, FormGroup, Input } from "reactstrap";
import Allcourse from "./ALLcourse";
import Axios from "axios";
import { toast } from "react-toastify";

const Addcourse = () => {

    const [course, setCourse] = useState({});
   
    const handleForm = (e) => {
        console.log(course.description);
        e.preventDefault();
    };
    /* -------------------------------- */
    const addCourse = () => {
        
        Axios.post("http://localhost:3001/create", {
            id: course.id,
            title: course.title,
            de: course.description, 
            
        }).then(() => {
            console.log("hi");
            toast.warn(Response);
        });
    };
    /* --------------------------------------- */
    return (

        <Fragment>
            <h1 className="text-center my-3">Add course details</h1>
            <Form onSubmit={addCourse}>
                <FormGroup>
                    <label for="userId">Course Id</label>
                    <Input type="text" placeholder="Enter course id here"
                        name="userId" id="userId"
                        onChange={(e) => {
                            
                            setCourse({ ...course, id: e.target.value })
                           
                        }}

                    />
                </FormGroup>
                <FormGroup>
                    <label for="title">Course title</label>
                    <Input type="text" placeholder="Enter course title here" name="title" id="title"

                        onChange={(e) => {
                            setCourse({ ...course, title: e.target.value })
                        }}
                    />
                </FormGroup>
                <FormGroup >
                    <label for="description">Course description</label>
                    <Input type="textarea" placeholder="Enter course description"
                        name="description" id="description"

                        onChange={(e) => {
                            setCourse({ ...course, description: e.target.value })
                        }}

                    />
                </FormGroup>
                <Container className='text-center'>
                    <Button type="submit" color="success mr-3">Add course</Button>
                    <Button type="reset" color="warning ">Clear</Button>
                </Container>

            </Form>
        </Fragment>

    )


}
export default Addcourse;