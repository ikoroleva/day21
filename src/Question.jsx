import { Answer } from "./Answer"

export function Question(props) {

    return (
        <div>
            <p><strong>{props.title}</strong></p>
            <p>{props.text}</p>
            <Answer text="You should be asking a different question. It’s like the question of it you should work hard or if you should work smart... I don’t know about you, but I work both. And when it comes to learning Angular or React, the same is true. If making the outcome of the decision between the two is important to you, if you don’t learn both you’re just being lazy." />
            <Answer text="I learned angular first. Why? I started a new job where it's used… then I learned react. Why? New job that uses react. In my opinion, it doesn't matter what you learn. Learning to learn is far more important. I have a passing acquaintance with a bunch of different technologies. I can easily switch to php, c#, jquery, angular, react, sass, less, node and a bunch of other stuff. Once you have the basics of programming, it's easy to switch between stuff." />
            <Answer text="some text" />
        </div>
    )


}