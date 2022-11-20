import React, { useState } from 'react';
// import { useSelectSingle } from 'react-day-picker';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AvailableAppoinment from '../AvailableAppoinment/AvailableAppoinment';

const Appointment = () => {
    const[selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div>
            <AppointmentBanner 
               selectedDate={selectedDate}
               setSelectedDate={setSelectedDate}
            
            ></AppointmentBanner>
            <AvailableAppoinment
                selectedDate={selectedDate}
            ></AvailableAppoinment>
        </div>
    );
};

export default Appointment;