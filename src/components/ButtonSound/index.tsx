import React from 'react'
import useSound from 'use-sound';

const ButtonSound = ({soundUrl}) => {
    const [play, { stop, isPlaying }] = useSound(soundUrl);
    return (
        <div>
            {soundUrl}
        </div>
    )
}

export default ButtonSound
