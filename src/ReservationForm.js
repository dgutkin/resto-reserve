
import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';

function ReservationForm({show, restaurantName}) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");

    const handleName = (e) => {
        setName(e.target.value);
        e.preventDefault();
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
        e.preventDefault();
    }

    const handleDate = (e) => {
        setDate(e.target.value);
        e.preventDefault();
    }

    const handleTime = (e) => {
        setTime(e.target.value);
        e.preventDefault();
    }

    const handleConfirm = (e) => {
        const result = {name, email, date, time};
        alert(JSON.stringify(result));
    }

    return (
        <div>
            {show && <>
                    <h4 id="reservation-form-label">Make a Reservation</h4>
                    <div id="reservation-form">
                    <p id="for-restaurant-label">For {restaurantName}</p>
                    <Form>

                        <Form.Group className="mb-4" controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" value={name} onChange={handleName}/>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Email" value={email} onChange={handleEmail}/>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicDate" value={date} onChange={handleDate}>
                            <Form.Label>Date</Form.Label>
                            <Form.Control type="date"/>
                        </Form.Group>

                        <Form.Group className="mb-4" controlId="formBasicTime" value={time} onChange={handleTime}>
                            <Form.Label>Time</Form.Label>
                            <Form.Control type="time"/>
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={handleConfirm}>
                            Confirm
                        </Button>

                    </Form>
                    </div>
                    
                </>}
        </div>
    )

}

export default ReservationForm;
