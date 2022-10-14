import React from 'react'
import ReactPlayer from 'react-player'
function Player({ id }) {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    return (
        <div className='my-3'>
            <ReactPlayer op url={`https://www.youtube.com/watch?v=${id}`}
                width='100%'
            // height='100%'
            />
        </div>
    )
}

export default Player