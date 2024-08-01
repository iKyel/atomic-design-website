import React from 'react';
import AdBanner from '../00-atoms/AdBanner';
import ad from '../../assets/images/ad.png';
import lg from '../../assets/images/lg.png'


const Ads = () => {
  const images = [
    { src: lg, alt: 'Lg', href: '/' },
    { src: ad, alt: 'Ad', href: '/' },

  ];

  return (
    <div className='container'>
      <AdBanner images={images} />
    </div>
  );
};

export default Ads;