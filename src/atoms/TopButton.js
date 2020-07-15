import React from 'react';

import './TopButton.scss';

const TopButton = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  return (
    <div className="TopButton" onClick={() => scrollToTop()}>
      <i aria-hidden="true" class="chevron circle up big link icon"></i>
    </div>
  )
}

export default TopButton
