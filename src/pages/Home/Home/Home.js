import React from 'react';
import Banner from '../Banner/Banner';
import InfoCards from '../../InfoCards/InfoCards';
import Services from '../Services/Services';
import Care from '../Care/Care';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Testimonial from '../../Testimonial/Testimonial';
import Stay from '../Stay/Stay';

const Home = () => {
    return(
        <div className='mx-5'>
           <Banner></Banner>
           <InfoCards></InfoCards>
           <Services></Services>
           <Care></Care>
           <MakeAppointment></MakeAppointment>
           <Testimonial></Testimonial>
           <Stay></Stay>


        </div>

    );
};

export default Home ;