import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
// import React, { useState } from 'react';
import AppointmentOptions from './AppointmentOptions';



const AvailableAppoinment = ({selectedDate}) => {
    const [appointmentOptions, setAppointmentOptions] = useState([])

    useEffect(() => {
        fetch ('service.json')
        .then(res => res.json())
        .then(data => setAppointmentOptions(data))
    },[])
    return (
        <section className='mt-16'>
            <p className='text-center text-primary font-bold'>Available Appointments on {format(selectedDate,'Pp')}</p>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOptions.map(option => <AppointmentOptions
                    key ={option._id}
                    appointmentOptions = {option}
                    
                    
                    ></AppointmentOptions>)
                }
            </div>
        </section>
    );
};

export default AvailableAppoinment;