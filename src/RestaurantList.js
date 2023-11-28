
import React, {useState, useEffect} from 'react';

import RestaurantCard from './RestaurantCard';

function RestaurantList({handleReserve}) {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {

        fetch('http://localhost:1337/graphql',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    query: `
                        query {
                            restaurants {
                                    data {
                                        attributes {
                                            Name
                                            Rating
                                            Description
                                        }
                                    }
                            } 
                        }
                    `
                }),
                variables: {}
            }).then((res) => {
                return res.json();
            }).then((data) => {
                const clean = data.data.restaurants.data.map((item) => {
                    return item.attributes;
                });
                setRestaurants(clean);
            });
        
    }, []);

    const restaurantCardList = restaurants.map((item, index) => {
        return (
            item &&
            <RestaurantCard 
                key={index}
                name={item.Name} 
                rating = {item.Rating} 
                description = {item.Description}
                handleReserve={handleReserve}/>
        )
    });

    return (
        <div>
            {restaurantCardList}
        </div>
    );

}

export default RestaurantList;