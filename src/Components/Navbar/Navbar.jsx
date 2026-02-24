import React from 'react'

const Navbar = () => {
    return (
        <>
            {/* NAVBAR */}
            <div className="navbar">
                <div className="nav-left">
                    <button className="icon-btn">←</button>
                    <span className="video-title">Custom Video Player </span>
                </div>
                <div className="nav-right">
                    <button className="icon-btn">⚙</button>
                    <button className="icon-btn">⛶</button>
                </div>
            </div>
        </>
    )
}

export default Navbar