import logo from './logo.svg';
import './App.css';
import { Question } from './Question';
import { Answer } from './Answer';
//import { Quote } from './Quote';
//import { ClickCounter } from './ClickCounter';

// const handleClick = () => {
//   console.log('click');
// }

// const quotes = [
//   'Without thinking there can be no revelation',
//   'Become fearless and flip burgers to make the voices stop',
//   'Get ready for grown ups!',
//   'This is what pride looks like',
//   'You don\'t need a big ego to seem intelligent',
//   'You can be the first person in the world to try to ridicule what others consider unridiculeable'];

// const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

function App() {

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>

    <div>
      <Question title="What are the best ways to find a name for your startup?" text="Choosing a great name for your startup is trickier than most founders and brand managers believe." />
      <Question title="Should I learn React or AngularJS?" text="It’s like the question of it you should work hard or if you should work smart..." />
      <Question title="Can a beginner learn ReactJS?" text="Some text" />
    </div>




    // <div>
    //   <Quote text={randomQuote} />
    //   <button onClick={handleClick}>Click me</button>
    // </div>
    // <ClickCounter />

  );
}

export default App;
