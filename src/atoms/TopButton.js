import React, { useState,useEffect } from 'react';

import './TopButton.scss';

const TopButton = () => {

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  })

  const checkScrollTop = () => {
   if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

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
