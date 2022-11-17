import React from 'react';

const Review = ({review}) => {
    const {name,img,reviewss,location} = review
    return (
        <div className="card bg-primary text-primary-content mt-10">
        <div className="card-body text-lg">
          <p>{reviewss}</p>
          <div className="card-actions justify-right">
          <div className="avatar mt-5 ">
             <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
              <img src={img} alt=''/>
            </div>
            {/* <div className=''>
                <h5 className='text-lg pr-2'>{name}</h5>
                <p className='text-lg pr-2'>{location}</p>
            </div> */}
          </div>  
          <div className='mt-6'>
                <h5 className='text-xl text-bold pr-2'>{name}</h5>
                <p className='text-lg pr-2'>{location}</p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Review;