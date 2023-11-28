import './App.css';
import RestaurantList from './RestaurantList.js';
import ReservationForm from './ReservationForm.js';

import React, {useState} from 'react';
import {Navbar, Row, Container, Col} from 'react-bootstrap';

function App() {

  const [reserve, setReserve] = useState(false);
  const [restaurant, setRestaurant] = useState("");

  const handleReserve = (name) => {

    setReserve(true);
    setRestaurant(name);

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
        <Row id="body-row">
          <Col id="restaurant-list-col">
            <RestaurantList handleReserve={handleReserve}/>
          </Col>
          <Col id="reservation-form-col">
            <ReservationForm show={reserve} restaurantName={restaurant}/>
          </Col>
        </Row>
      </Container>
    </div>
  );

}

export default App;
