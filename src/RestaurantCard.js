
import {Card, Row, Button} from 'react-bootstrap';

function RestaurantCard({name, rating, description, handleReserve}) {
    
    return (
        <Card className="mb-2">
            <Row>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}<br/>Rating: {rating}/5</Card.Text>
                <Button name={name} onClick={() => handleReserve(name)}>Reserve</Button>
            </Card.Body>
            </Row>
            
        </Card>
    );

}

export default RestaurantCard;