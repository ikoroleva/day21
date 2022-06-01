import { useState } from 'react'

export const ClickCounter = () => {


    const [noClicks, setNoClicks] = useState(0);

    console.log(noClicks);

    const handleClick = () => {
        setNoClicks(noClicks++); //setting the new vallue to something
    }

    return (
        <>
            <p>I was clicked {noClicks} times</p>
            <button onClick={handleClick}>Click me </button>
        </>
    )
}