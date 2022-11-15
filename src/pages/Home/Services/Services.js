import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import CavityFilling from '../../../assets/images/cavity.png';
import TeethWhitening from '../../../assets/images/whitening.png';
import Service from './Service';
const  Services = () => {
    const servicesData = [
        {
            id : 1,
            name : 'Fluoride Treatment',
            description : 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img : fluoride 
            //bgClass : 'bg-gradient-to-r from-purple-500 to-pink-500'
        },
        {
            id : 2,
            name : 'Cavity Filling',
            description : 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img : CavityFilling 
            //bgClass : 'bg-gradient-to-r from-purple-500 to-pink-500'
        },
        {
            id : 3,
            name : 'Teeth Whitening',
            description : 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the',
            img :TeethWhitening 
            //bgClass : 'bg-gradient-to-r from-purple-500 to-pink-500'
        },
    ]
    return (
        <div className='mt-16'>
            <div className='text-center mt-5 '>
                <h3 className='text-5xl font-bold '>Our Services</h3>
                <h2 className='text-2xl'>Services We Provide</h2>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    servicesData.map(service => <Service
                           key ={service.id}
                           service={service}
                    ></Service>)
                }
            </div>

            
        </div>
    );
};

export default Services;