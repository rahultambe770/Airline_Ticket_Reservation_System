import React from 'react';
import { Jumbotron, Button, Container } from 'reactstrap';

const Home = () => {

    return (
        <div>
            <Jumbotron className="text-center">
                <h1 >Learn code</h1>
                <p>This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
                <Container>
                    <Button color="primary">Start Learning</Button>
                </Container>


            </Jumbotron>
        </div>

    );


}

export default Home;