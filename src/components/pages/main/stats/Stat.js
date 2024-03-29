import React, { useState } from 'react';

import CountUp from "react-countup";
import PropTypes from 'prop-types';
import VisibilitySensor from "react-visibility-sensor";

const Stat = props => {
  const [animationFired, setAnimationFired] = useState(false);

  const onVisibilitySensorChange = isVisible => {
    if (isVisible && !animationFired) {
      setAnimationFired(true);
    }
  };

  return (
    <div className="text-white flex flex-col justify-center items-center h-full">
      <VisibilitySensor onChange={onVisibilitySensorChange}>
        <span className="font-futura-bold block text-6xl sm:text-5xl xs:text-5xl">
          {animationFired ? (
            <CountUp
              start={props.countStart}
              end={props.countEnd}
              duration={props.countDuration}
              startOnMount={false}
            />
          ) : (
            <React.Fragment>
              {props.countStart}
            </React.Fragment>
          )}
          {props.signVisible && <span className="text-green">+</span>}
        </span>
      </VisibilitySensor>
      <span className="font-rustico-regular block text-2xl sm:text-xl xs:text-xl max-w-3/4 break-normal text-center">
        {props.href ? (
          <a className="hover:text-gray" href={props.href} rel="noreferrer noopener">
            {props.text}
          </a>
        ) : (
          <>{props.text}</>
        )}
      </span>
    </div>
  );
};

Stat.defaultProps = {
  countStart: 0,
  countEnd: 0,
  signVisible: false,
  href: ''
};

Stat.propTypes = {
  countStart: PropTypes.number,
  countEnd: PropTypes.number,
  countDuration: PropTypes.number.isRequired,
  signVisible: PropTypes.bool,
  text: PropTypes.string.isRequired,
  href: PropTypes.string,
};

export default Stat;