import React from 'react';

const Review = ({review}) => {
    const {name,img,reviewss,location} = review
    return (
        <div className="card bg-primary text-primary-content ">
        <div className="card-body">
          <p>{reviewss}</p>
          <div className="card-actions justify-right">
          <div className="avatar">
             <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={img} alt=''/>
            </div>
            <div>
                <h5 className='text-lg'>{name}</h5>
                <p>{location}</p>
            </div>
          </div>  
          </div>
        </div>
      </div>
    );
};

export default Review;