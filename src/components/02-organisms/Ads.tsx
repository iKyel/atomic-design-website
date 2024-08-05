/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ad from '../../assets/images/ad.png';
import lg from '../../assets/images/lg.png'


const Ads = () => {

  return (
    <div className="ads">
            <div className="container ads_inner">
                <div className="ads_logo">
                    <img src={lg} />
                </div>
                <div className="ads_ad">
                    <img src={ad} />
                </div>
            </div>
        </div>
  );
};

export default Ads;