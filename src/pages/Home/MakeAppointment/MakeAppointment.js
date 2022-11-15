import React from 'react';
import doctorsmall from '../../../assets/images/doctor-small.png';
import appoinment from '../../../assets/images/appointment.png'
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
const MakeAppointment = () => {
    return (
        <section className='mt-60'
            style={{
                background : `url(${appoinment})`
            }} 
        
        >
        <div className="hero  ">
            <div className="hero-content flex-col lg:flex-row">
                <img src={doctorsmall} className="-mt-60 hidden lg:block lg:w1/2 rounded-lg shadow-2xl  " alt='' />
            <div>
                <h3 className='text-xl text-yellow-600'>Appointment</h3>
                <h1 className="text-5xl font-bold  text-yellow-600">Make an appointment Today</h1>
                <p className="py-6  text-yellow-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                {/* //<button className="btn btn-primary">Get Started</button> */}
                <PrimaryButton>Appointment</PrimaryButton>
            </div>
            </div>
        </div>
        </section>
    );
};

export default MakeAppointment;