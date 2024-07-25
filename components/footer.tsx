import React from 'react'
import AudioLink from './audiolink';

const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <footer className="bg-[#222222] text-white p-4 bottom-0 z-50 w-full">
      <div className="mx-auto max-w-screen-xl w-full flex justify-between flex-col md:flex-row">
      <div>
        <AudioLink href="https://www.google.com/maps/place/Palayur,+Pappanaickenpalayam,+Tamil+Nadu+641044/@11.0170943,76.9852586,15z/data=!3m1!4b1!4m6!3m5!1s0x3ba8584bd4364f8d:0x37275d90116754c8!8m2!3d11.0170946!4d76.9852586!16s%2Fg%2F1hd_7jhl1?entry=ttu">
          பாப்பநாயக்கன்பாளையம், கோயம்புத்தூர்
        </AudioLink>
      </div>
      <p>&copy; {currentYear} SVGPix/Nidhin </p>
      </div>
    </footer>
  )
}

export default Footer