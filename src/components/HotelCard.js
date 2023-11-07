// HotelCard.js
import React from 'react';
import PropTypes from 'prop-types';

function HotelCard({ heading, moneyValue, imageSrc, profitLossIndicator }) {
  return (
    <div className="hotel-card">
      <img src={imageSrc} alt="Hotel" className="card-image" />
      <div className="card-content">
        <h3 className="card-heading">{heading}</h3>
        <p className="card-money-value">${moneyValue}</p>
        <p className={`card-indicator ${profitLossIndicator > 0 ? 'profit' : 'loss'}`}>
          {profitLossIndicator > 0 ? 'Profit' : 'Loss'}
        </p>
      </div>
    </div>
  );
}

HotelCard.propTypes = {
  heading: PropTypes.string.isRequired,
  moneyValue: PropTypes.number.isRequired,
  imageSrc: PropTypes.string.isRequired,
  profitLossIndicator: PropTypes.number.isRequired,
};

export default HotelCard;
