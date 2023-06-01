import React from 'react';
import { Link } from 'react-router-dom';

const RefreshLink = ({ to, children }) => {
  const handleClick = (event) => {
    if (to === window.location.pathname) {
      event.preventDefault();
      window.location.reload();
    }
  };

  return <Link to={to} onClick={handleClick}>{children}</Link>;
};

export default RefreshLink;
