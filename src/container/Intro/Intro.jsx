import React, { useState, useRef } from 'react';
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = useState(false)
  const vidRef = useRef()

  const handleVideo = () => {
    setPlayVideo((prevplayVideo) => !prevplayVideo)

    if (playVideo) {
      vidRef.current.pause()
    } else {
      vidRef.current.play()
    }
  }

  return (
    <div className='video'>
      <video
        src={meal}
        ref={vidRef}
        controls={false}
        muted
        typeof='video/mp4'
        loop
      />

      <div className='video-overlay flex-center'>
        <div
          className='video-overlay-circle flex-center'
          onClick={handleVideo}
        >

          {
            playVideo ? <BsFillPauseFill color="#fff" fontSize={30} />
              : <BsFillPlayFill color="#fff" fontSize={30} />
          }

        </div>
      </div>
    </div>
  )
};

export default Intro;
