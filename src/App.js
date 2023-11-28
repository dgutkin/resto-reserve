import './App.css';
import RestaurantList from './RestaurantList.js';
import ReservationForm from './ReservationForm.js';

import React, {useState} from 'react';
import {Navbar, Row, Container, Col} from 'react-bootstrap';

function App() {

  const [reserve, setReserve] = useState(false);

  const handleReserve = (e) => {

    setReserve(true);

  }

  return (
    <div className="App">
      <Container fluid>
        <Row>
          <Navbar expand="lg" className="bg-body-primary">
          <Container>
            <Navbar.Brand href="#">Resto Reserve</Navbar.Brand>
          </Container>
          </Navbar>
        </Row>
        <Row>
          <Col>
            <RestaurantList handleReserve={handleReserve}/>
          </Col>
          <Col>
            <ReservationForm show={reserve}/>
          </Col>
        </Row>
      </Container>
    </div>
  );

}

export default App;
