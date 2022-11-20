// import React, { useState } from 'react';
import chair from '../../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
//  import { format } from 'date-fns';
import bgimg from '../../../assets/images/bg.png';


const AppointmentBanner = (selectedDate , setSelectedDate) => {
    
    return (
        <header className='my-6'
            style={{
                background: `url(${bgimg})`,
                backgroundSize: 'cover'
            }}
        >
            <div className="hero ">
           <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={chair} className="max-w-sm lg:w1/2 rounded-lg shadow-2xl" alt='chair'/>
                  <div className='mr-9'>
                    <DayPicker
                     mode="single"
                     selected={selectedDate}
                     onSelect={setSelectedDate}
                    
                    />
                    {/* <p className='mt-5'>You Have Selected Date: {format(selectedDate, 'PP')}</p> */}

                  </div>
                </div>
            </div>
        </header>
    );
};

export default AppointmentBanner;