import { useState } from 'react'

const AnswerLikesCounter = () => {
    const [noClicks, setNoClicks] = useState(0);

    const handleClick = () => {
        setNoClicks(noClicks + 1); //setting the new vallue to something
    }


    return (
        <div>
            <p>Likes {noClicks}</p>
            <button onClick={handleClick}>Like</button>
        </div>
    )
}

export { AnswerLikesCounter }