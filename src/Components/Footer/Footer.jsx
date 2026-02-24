import React from 'react'
import { Play, Pause, Volume2, VolumeX, Settings, Maximize2, Minimize2, Shuffle, SkipBack, SkipForward } from 'lucide-react'

const Footer = ({
    isPlaying,
    isMuted,
    volume,
    duration,
    played,
    playbackRate,
    onPlayPause,
    onMute,
    onVolumeChange,
    onSeekMouseDown,
    onSeekChange,
    onSeekMouseUp,
    onFastForward,
    onRewind,
    onPlaybackRateChange
}) => {
    const formatTime = (seconds) => {
        if (isNaN(seconds)) return "0:00";
        const min = Math.floor(seconds / 60);
        const sec = Math.floor(seconds % 60);
        return `${min}:${sec < 10 ? "0" : ""}${sec}`;
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
                        max={duration || 0}
                        step={0.1}
                        value={played}
                        onMouseDown={onSeekMouseDown}
                        onChange={onSeekChange}
                        onMouseUp={onSeekMouseUp}
                        style={{
                            background: duration
                                ? `linear-gradient(to right, #1db954 ${(played / duration) * 100}%, rgba(255,255,255,0.4) ${(played / duration) * 100}%)`
                                : "#ccc"
                        }}
                    />
                </div>

                <span>{formatTime(duration)}</span>
            </div>

            {/* Bottom Controls Row */}
            <div className="controls-row">

                {/* Left */}
                <div className="left-controls">
                    <button onClick={onMute}>
                        {isMuted ? <VolumeX /> : <Volume2 />}
                    </button>

                    <input
                        type="range"
                        min={0}
                        max={1}
                        step={0.05}
                        value={volume}
                        onChange={onVolumeChange}
                    />
                </div>

                {/* Center */}
                <div className="center-controls">
                    <button onClick={onRewind}>
                        <SkipBack />
                    </button>

                    <button id='play-pause' onClick={onPlayPause}>
                        {isPlaying ? <Pause /> : <Play />}
                    </button>

                    <button onClick={onFastForward}>
                        <SkipForward />
                    </button>
                </div>

                {/* Right */}
                <div className="right-controls">
                    <select value={playbackRate} onChange={onPlaybackRateChange}>
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