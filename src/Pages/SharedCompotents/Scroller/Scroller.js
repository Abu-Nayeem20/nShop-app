import React, { useState } from 'react';
import './Scroller.css';

const Scroller = () => {

    const [visible, setVisible] = useState(false)
  
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 600){
        setVisible(true)
      } 
      else if (scrolled <= 600){
        setVisible(false)
      }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
    };
    window.addEventListener('scroll', toggleVisible);

    return (
        <div>
            <div style={{display: visible ? 'block' : 'none'}} onClick={scrollToTop} id="scrll">
            <i className="fas fa-angle-double-up"></i>
        </div> 
        </div>
    );
};

export default Scroller;