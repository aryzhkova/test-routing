import React from 'react';
import ItemListContainer from '../item-list';

const HomePage = () => {
    return (
        <div className="home-page"> 
            <div className="home-page-title d-flex justify-content-around align-items-center">
                <h2>Top Headlines News of US</h2>
                <a href="https://newsapi.org" >Powered by News API</a>
            </div>

            <ItemListContainer />
        </div>

    );
}

export default HomePage;