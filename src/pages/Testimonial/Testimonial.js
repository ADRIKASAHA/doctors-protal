import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {
    const reviews =[
        {
            _id: 1,
            name: 'Winson Herry',
            img: people1,
            reviewss : 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'

        },
        {
            _id: 2,
            name: 'Mary',
            img: people2,
            reviewss: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'

        },
        {
            _id: 3,
            name: 'Shu',
            img: people3,
            reviewss: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'

        }
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-bold text-2xl'>Testimonial</h4>
                    <h3 className='text-4xl'>What Our Patients Says</h3>
                </div>
                
                <figure>
                        <img className='w-24 lg:w-48'src={quote} alt=''/>
                </figure>

              

            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review =><Review
                         key={review._id}
                         review ={review}
                    
                    ></Review>)
                }

            </div>
            
        </section>
    );
};

export default Testimonial;