
import React, {useState, useEffect} from 'react';

import RestaurantCard from './RestaurantCard';

function RestaurantList({handleReserve}) {

    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {

        const fetchData = async () => {

            return fetch('http://localhost:1337/graphql',{
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
            }).catch((error) => {Promise.reject("error")});

        }

        const cleanData = (data) => {
            
            const dataInner = data.data.restaurants.data;
            const clean = dataInner.map((item) => {
                return item.attributes;
            });
            
            return clean;

        }

        const getFromApi = async () => {

            let result = await fetchData();
            let cleanResult = cleanData(result);
            setRestaurants(cleanResult);

        }

        getFromApi();
        
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
            <h4 id="restaurant-list-label">Restaurants</h4>
            {restaurantCardList}
        </div>
    );

}

export default RestaurantList;