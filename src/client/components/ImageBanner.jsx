import React from 'react';
import image from '../../assets/photo-1421986527537-888d998adb74.jpeg';

const ImageBanner = () => {
  return (
    <div className='image'>
      <img src={image} alt='logo' width='100%' />     
        <h2 className='intro'>
          <span>
            We'd like to get to know you better. 
            Tell us about yourself and the sort of someone you'd <br />
            like to meet. Don't worry, no one will see this besides the matchmakers at Tawkify.
          </span>
        </h2>
    </div>
  )
}

export default ImageBanner;