import React, { useState } from 'react'
const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>;
const App = () => {
    const heading = 'give feedback'
    const head = 'statistics'
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
        <div>
       <h1>{heading}</h1>
       
        <button onClick={() => setGood(good + 1)}>
          good
        </button>
        <button onClick={() => setNeutral(neutral + 1)}>
        neutral
        </button>
        <button onClick={() => setBad(bad + 1)}>
        bad  
         </button>
        <h1>{head}</h1>
        <Statistic good={good} neutral={neutral} bad={bad} />
        
</div>
    )
};
const Stati = ({notes, num}) => {
    return (
        <tr>
            <td>{notes}</td>
            <td>{num}</td>
        </tr>
    );
};
const Statistic = ({good, neutral, bad}) => {

    return (
        <div>
            {
                <table>
                    <tbody>
                        <Stati notes='Good' num={good} />
                        <Stati notes='Neutral' num={neutral} />
                        <Stati notes='Bad' num={bad} />
                       
                    </tbody>
                </table>
                
            }
        </div>
    );
};

export default App