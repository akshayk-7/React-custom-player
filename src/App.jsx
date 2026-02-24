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
  const [playbackRate, setPlaybackRate] = useState(1)


  const handleProgress = (state) => {
    if (!seeking) {
      setPlayed(state.playedSeconds)
      setBuffered(state.loadedSeconds)
    }
  }

  const handleDuration = (dur) => {
    setDuration(dur)
  }

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  const handleMute = () => {
    setIsMuted(!isMuted)
  }

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value))
  }

  const handleSeekMouseDown = () => setSeeking(true)

  const handleSeekChange = (e) => {
    setPlayed(parseFloat(e.target.value))
  }

  const handleSeekMouseUp = (e) => {
    setSeeking(false)
    if (playerRef.current) {
      playerRef.current.seekTo(parseFloat(e.target.value))
    }
  }

  const handleFastForward = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(played + 10)
    }
  }

  const handleRewind = () => {
    if (playerRef.current) {
      playerRef.current.seekTo(played - 10)
    }
  }

  const handlePlaybackRateChange = (e) => {
    setPlaybackRate(parseFloat(e.target.value))
  }

  const [isFullScreen, setIsFullScreen] = useState(false)

  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen)
  }
  return (
    <div>
      <Navbar isFullScreen={isFullScreen} onToggleFullScreen={toggleFullScreen} />

      <div className="app">
        <div className="player-container" ref={containerRef}>
          {/* VIDEO */}
          <ReactPlayer
            ref={playerRef}
            url="https://www.youtube.com/watch?v=LXb3EKWsInQ"
            playing={isPlaying}
            muted={isMuted}
            volume={volume}
            playbackRate={playbackRate}
            width="100%"
            height="100%"
            onProgress={handleProgress}
            onDuration={handleDuration}
            className="react-player"
          />
        </div>
      </div>
      {/* FOOTER */}
      <Footer
        isPlaying={isPlaying}
        isMuted={isMuted}
        volume={volume}
        duration={duration}
        played={played}
        playbackRate={playbackRate}
        onPlayPause={handlePlayPause}
        onMute={handleMute}
        onVolumeChange={handleVolumeChange}
        onSeekMouseDown={handleSeekMouseDown}
        onSeekChange={handleSeekChange}
        onSeekMouseUp={handleSeekMouseUp}
        onFastForward={handleFastForward}
        onRewind={handleRewind}
        onPlaybackRateChange={handlePlaybackRateChange}
      />
    </div>
  )
}

export default App