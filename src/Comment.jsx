import { useState } from "react";



export function Comment(props) {

    const [comment, setComment] = useState('')
    const [input, setInput] = useState('');

    const handleCommentChange = (e) => {
        console.log(e.target.value);
        setComment(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        //console.log('Submitting');

        if (comment !== '') {
            setInput(comment);
            setComment('');

        }
    }



    return (
        <>
            {
                input !== '' && (
                    <p>{input}</p>
                )
            }
            <form>
                <label>
                    Comment:
                    <input type="text" name="comment" value={comment} onChange={handleCommentChange} />
                </label>
                <input type="submit" value="Add a comment" onClick={handleSubmit} />
            </form>

        </>
    )
}