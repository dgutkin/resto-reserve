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
          <Col id="restaurant-list-col">
            <RestaurantList handleReserve={handleReserve}/>
          </Col>
          <Col id="reservation-form-col">
            <ReservationForm show={reserve}/>
          </Col>
        </Row>
      </Container>
    </div>
  );

}

export default App;
