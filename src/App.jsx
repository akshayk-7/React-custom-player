import React, { useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import Navbar from './Components/Navbar/Navbar'
import Footer from './Components/Footer/Footer'

const App = () => {

  const playerRef = useRef(null)
  const containerRef = useRef(null)
  const [volume, setVolume] = useState(0.5)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [duration, setDuration] = useState(0)
  const [seeking, setSeeking] = useState(false)
  const [played, setPlayed] = useState(0)
  const [buffered, setBuffered] = useState(0)

  const handleProgress = (state) => {
    if (!seeking) {
      setPlayed(state.playedSeconds)
      setBuffered(state.loadedSeconds)
    }
  }

  const handleDuration = (dur) => {
    setDuration(dur)
  }

  // const formatTime = (seconds) => {
  //   const min = Math.floor(seconds / 60);
  //   const sec = Math.floor(seconds % 60);
  //   return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  // }
  // const handlePlay = () => {
  //   setIsPlaying(!isPlaying)
  // }

  // const handleMute = () => {
  //   setIsMuted(!isMuted)
  // }

  // const handleVolume = (e) => {
  //   setVolume(parseFloat(e.target.value))
  // }

  // const handleSeekMouseDown = () => setSeeking(true)

  // const handleSeekChange = (e) => {
  //   setPlayed(parseFloat(e.target.value))
  // }

  // const handleSeekMouseUp = (e) => {
  //   setSeeking(false)
  //   playerRef.current.seekTo(parseFloat(e.target.value))
  // }

  // const volumePercentage = volume * 100;
  return (
    <div>
      <Navbar />

      <div className="app">
        <div className="player-container" ref={containerRef}>



          {/* VIDEO */}
          <ReactPlayer
            ref={playerRef}
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            playing={isPlaying}
            muted={isMuted}
            volume={volume}
            width="100%"
            height="100%"
            onProgress={handleProgress}
            onDuration={handleDuration}
            className="react-player"
          />

          {/* FOOTER */}


        </div>
      </div>
      <Footer />
    </div>

  )
}

export default App