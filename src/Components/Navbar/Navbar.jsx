import React from 'react'
import { Settings, Maximize2, Minimize2 } from 'lucide-react'


const Navbar = ({ isFullScreen, onToggleFullScreen }) => {
    return (
        <>
            {/* NAVBAR */}
            <div className="navbar">
                <div className="nav-left">
                    <button className="icon-btn">←</button>
                    <span className="video-title">Custom Video Player </span>
                </div>
                <div className="nav-right">
                    <button className="icon-btn"><Settings /></button>
                    <button className="icon-btn" onClick={onToggleFullScreen}>
                        {isFullScreen ? <Minimize2 /> : <Maximize2 />}
                    </button>
                </div>
            </div>
        </>
    )
}

export default Navbar