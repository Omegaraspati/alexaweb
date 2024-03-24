import React from 'react'

const videoLx = () => {
  return (
    <div>
        <video className="shadow-lg  md:px-32 md:py-1 w-full bg-blue-700 bg-video" preload='playsinline' autoPlay loop controls muted data-aos="fade-up"
    data-aos-duration="1000">
  <source
    src="https://www.alexawater.co.id/wp-content/uploads/2022/07/Alexa-Commercial-with-Logo-2.mp4" type="video/mp4"/>
</video>
    </div>
    
  )
}

export default videoLx

