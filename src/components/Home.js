import React from 'react';
import Products from './Products';
import './Home.css';

function Home() {
    return (
        <div className="home">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/N2IxYThmYzAt/N2IxYThmYzAt-MjVlNmIyZTUt-w1500._CB407941419_.jpg" alt="" 
            className="home__image"/>
        <div className="home__row">
            <Products 
            id="123"
            title="Google Pixel 4a"
            price={11.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71Q8gm97H8L._AC_UL320_.jpg" />

            <Products 
            id="123"
            title="Google Pixel 4a"
            price={11.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71Q8gm97H8L._AC_UL320_.jpg" />

            <Products 
            id="123"
            title="Google Pixel 4a"
            price={11.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71Q8gm97H8L._AC_UL320_.jpg" />

        </div>

        <div className="home__row">
            <Products 
            id="123"
            title="Google Pixel 4a"
            price={11.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71Q8gm97H8L._AC_UL320_.jpg" />

            <Products 
            id="123"
            title="Google Pixel 4a"
            price={11.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71Q8gm97H8L._AC_UL320_.jpg" />

            <Products 
            id="123"
            title="Google Pixel 4a"
            price={11.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/71Q8gm97H8L._AC_UL320_.jpg" />

        </div>

        </div>
    )
}

export default Home;
