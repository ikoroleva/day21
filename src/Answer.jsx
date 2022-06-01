import { AnswerLikesCounter } from "./AnswerLikesCounter";
import { Comment } from "./Comment";

export function Answer(props) {



    return (
        <div>
            {/* <p>Likes {props.likes}</p> */}
            <p>{props.text}</p>
            <AnswerLikesCounter />
            <Comment />
        </div>
    )


}