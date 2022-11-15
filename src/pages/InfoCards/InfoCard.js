import React from 'react';
//import InfoCards from './InfoCards';


const InfoCard = ({card}) => {
    const { name, descripation, icon, bgClass} = card;
   console.log(card);
    return(
        <div className={`card text-white mt-8 p-6  card-side  shadow-xl ${bgClass}`}>
            <figure>
                <img src={icon} alt="pic"/>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{descripation}</p>
                {/* <div className="card-actions justify-end">
                <button className="btn btn-primary">Watch</button>
                </div> */}
            </div>
        </div>
    );
};

export default InfoCard;