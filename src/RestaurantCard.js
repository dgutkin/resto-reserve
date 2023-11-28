
import {Card, Row, Button} from 'react-bootstrap';

function RestaurantCard({name, rating, description, handleReserve}) {
    
    return (
        <Card className="mb-2">
            <Row>
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>{description}</Card.Text>
                <Button name={name} onClick={handleReserve}>Reserve</Button>
            </Card.Body>
            </Row>
            
        </Card>
    );

}

export default RestaurantCard;