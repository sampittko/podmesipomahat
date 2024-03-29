import PropTypes from 'prop-types';
import React from 'react';

const OpeningHours = props => {
  return (
    <div className="text-center text-5xl md:text-4xl sm:text-2xl xs:text-2xl font-futura-bold mt-14 md:mt-10 sm:mt-3 xs:mt-3">
      <span className="pr-14 md:pr-10 sm:pr-8 xs:pr-8">
        {props.fromDay} - {props.toDay}
      </span>
      <span>
        {props.fromHour} - {props.toHour}
      </span>
    </div>
  );
};

OpeningHours.propTypes = {
  fromHour: PropTypes.string.isRequired,
  toHour: PropTypes.string.isRequired,
  fromDay: PropTypes.string.isRequired,
  toDay: PropTypes.string.isRequired,
};

export default OpeningHours;