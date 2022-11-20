import React from 'react';


const AppointmentOptions = ({appointmentOptions}) => {
    const {name,slots}= appointmentOptions;
    return (
        <div className="card w-96 bg-neutral text-neutral-content">
             <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>
                {slots.length > 0 ? slots[0] : 'TRy Another Day'}
            </p>
            <p>{slots.lemght} {slots.length > 1 ? 'spaces' : 'space'}</p>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Book Appointment</button>
                
            </div>
             </div>
        </div>
    );
};

export default AppointmentOptions;