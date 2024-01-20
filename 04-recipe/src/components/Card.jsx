import React from 'react';

export default function Card({ recipe }) {
    const { image, name, tag, numberOfMinutes } = recipe;

    return (
      <div>
        <div className='card'>
          <img src={image} alt="" />
          <div className="card-content">
            <h3>{name}</h3>
            <div className="card-info">
              <div className="tag">
                <p>{tag}</p>
              </div>
              <p className="time-text">{numberOfMinutes} Mins</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
