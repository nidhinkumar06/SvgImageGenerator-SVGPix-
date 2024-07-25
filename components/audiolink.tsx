"use client"

import Link from 'next/link';
import { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';

const AudioLink = ({ href, children }: any) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <p>
        Made in {' '}
        <Link className="underline" href={href} target="_blank">
          {children}
        </Link>
      </p>

      {isHovered && (
        <ReactAudioPlayer
          src="/audio/palayam.mp3"
          autoPlay
          controls={false}
        />
      )}
    </div>
  )
}

export default AudioLink