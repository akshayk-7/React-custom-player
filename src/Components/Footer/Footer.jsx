import React, { useRef, useState } from 'react'
import { Play, Pause, Volume2, VolumeX, Settings, Maximize2, Minimize2, Shuffle, SkipBack, SkipForward } from 'lucide-react'

const Footer = () => {
    const playerRef = useRef(null)
    const [volume, setVolume] = useState(0.5)
    const [isPlaying, setIsPlaying] = useState(false)
    const [isMuted, setIsMuted] = useState(false)
    const [duration, setDuration] = useState(0)
    const [seeking, setSeeking] = useState(false)
    const [played, setPlayed] = useState(0)



    const formatTime = (seconds) => {
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min}:${sec < 10 ? "0" : ""}${sec}`;
    }
    const handlePlay = () => {
        setIsPlaying(!isPlaying)
    }

    const handleMute = () => {
        setIsMuted(!isMuted)
    }

    const handleVolume = (e) => {
        setVolume(parseFloat(e.target.value))
    }

    const handleSeekMouseDown = () => setSeeking(true)

    const handleSeekChange = (e) => {
        setPlayed(parseFloat(e.target.value))
    }

    const handleSeekMouseUp = (e) => {
        setSeeking(false)
        playerRef.current.seekTo(parseFloat(e.target.value))
    }

    return (

        <div className="footer">
            {/* Progress */}
            <div className="progress-container">
                <span>{formatTime(played)}</span>

                <div className="progress-wrapper">
                    <input
                        type="range"
                        min={0}
                        max={duration}
                        step={0.1}
                        value={played}
                        onMouseDown={handleSeekMouseDown}
                        onChange={handleSeekChange}
                        onMouseUp={handleSeekMouseUp}
                    />
                </div>

                <span>{formatTime(duration)}</span>
            </div>

            {/* Bottom Controls Row */}
            <div className="controls-row">

                {/* Left */}
                <div className="left-controls">
                    <button onClick={handleMute}>
                        {isMuted ? <VolumeX /> : <Volume2 />}
                    </button>

                    <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.1}
                        value={volume}
                        onChange={handleVolume}
                    />
                </div>

                {/* Center */}
                <div className="center-controls">
                    <button onClick={() => playerRef.current.seekTo(played - 10)}>
                        <SkipBack />
                    </button>

                    <button id='play-pause' onClick={handlePlay}>
                        {isPlaying ? <Pause /> : <Play />}
                    </button>

                    <button onClick={() => playerRef.current.seekTo(played + 10)}>
                        <SkipForward />
                    </button>
                </div>

                {/* Right */}
                <div className="right-controls">
                    <select>
                        <option value="0.5">0.5x</option>
                        <option value="1">1x</option>
                        <option value="1.5">1.5x</option>
                        <option value="2">2x</option>
                    </select>

                    <button><Shuffle /></button>
                </div>

            </div>
        </div>
    )
}

export default Footer