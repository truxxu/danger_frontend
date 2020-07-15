import React, { useState } from 'react';

import './TopButton.scss';

const TopButton = () => {

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
   if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  window.addEventListener('scroll', checkScrollTop);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (showScroll) {
    return (
      <div className="TopButton" onClick={scrollToTop}>
        <i aria-hidden="true" className="chevron circle up big link icon"></i>
      </div>
    )
  }

  return null

}

export default TopButton
