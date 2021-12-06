import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import Footer from '../../../Shared/Footer/Footer';
import ShowServices from '../../ShowServices/ShowServices';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <h2>This is Home</h2>
            <ShowServices/>
            <Footer></Footer>
        </div>
    );
};

export default Home;