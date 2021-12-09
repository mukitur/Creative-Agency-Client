import React from 'react';
import Navigation from '../../../Shared/Navigation/Navigation';
import Footer from '../../../Shared/Footer/Footer';
import ShowServices from '../../ShowServices/ShowServices';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner/>
            <ShowServices/>
            <Footer></Footer>
        </div>
    );
};

export default Home;