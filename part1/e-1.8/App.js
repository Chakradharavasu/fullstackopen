import React, { useState } from 'react'

const Statistics = (props) => {
  <button onClick = {props.text}></button>
  return (
    <div>
      <h1>statistics</h1>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.all}</p>
      <p>average {props.average}</p>
      <p>positive {props.positive}%</p>
    </div>
  )
}
const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  


  
  return (
    <div>
        
      <h1>give feedback</h1>
        
      <button onClick={() => setGood(good + 1)}>
          good
        </button>
        <button onClick={() => setNeutral(neutral + 1)}>
        neutral
        </button>
        <button onClick={() => setBad(bad + 1)}>
        bad  
         </button>
        <Statistics good={good} neutral={neutral} bad={bad} total={good + neutral + bad} average={(good - bad) /good+neutral+bad} positive={good / (good+neutral+bad)}/>
    </div>
  )
}

export default App