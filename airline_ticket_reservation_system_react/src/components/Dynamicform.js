import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import { Button, Container, Form, FormGroup, Input, Card, CardBody, Col, Label, CustomInput } from "reactstrap";


function App() {
    const [inputFields, setInputFields] = useState([
        { id: uuidv4(), firstName: '', luggage: '', age: ''  },
    ]);

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
    }

    const handleAddFields = () => {
        setInputFields([...inputFields, { id: uuidv4(), firstName: '', luggage: '', age: '' }])
    }

    const handleRemoveFields = id => {
        const values = [...inputFields];
        values.splice(values.findIndex(value => value.id === id), 1);
        setInputFields(values);
    }

    return (
        <Container>
            <h1>Add New Member</h1>

            <Button onClick={handleAddFields}> ADD </Button>
            <form onSubmit={handleSubmit}>
                {inputFields.map(inputField => (
                    <div key={inputField.id}>
                       
                        <FormGroup>
                            <label >First Name</label>
                            <Input type="text" placeholder="Enter Name  here"
                                name="firstName" id="firstName" value={inputField.firstName}
                                onChange={event => handleChangeInput(inputField.id, event)}
                            />
                        </FormGroup>
                         <FormGroup>
                            <label >Luggage</label>
                            <Input type="number" placeholder="Enter Luggage  here"
                                name="luggage" id="luggage" value={inputField.luggage}
                                onChange={event => handleChangeInput(inputField.id, event)}
                            />
                        </FormGroup> 


                         <FormGroup>
                            <label >Age</label>
                            <Input type="number" placeholder="Enter Age  here"
                                name="age" id="age" value={inputField.age}
                                onChange={event => handleChangeInput(inputField.id, event)}
                            />
                        </FormGroup> 
                        <Button disabled={inputFields.length === 1} onClick={() => handleRemoveFields(inputField.id)}> Remove  </Button>
                        
                    </div>
                ))}
                <Button color="primary" type="submit" onClick={handleSubmit}>Send</Button>
            </form>
        </Container>
    );
}

export default App;
