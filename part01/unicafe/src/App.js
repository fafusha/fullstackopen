import { useState } from 'react'

const FeedbackHeader = () => <h1>Give Feedback</h1>

const StatisticsHeader = () => <h1>Statistics</h1>

const StatisticsLine = ({text, value}) => 
  <tr>
    <td>{text}</td>
    <td>{value}</td>
  </tr>

const Statistics = ({good, neutral, bad}) => {
  const all = good + neutral + bad
  if (all === 0) {
    return (
      <p>No feeback given.</p>
    )
  }
  const average = (good - bad) / all
  const positive = good / all * 100 + "%"
  return (
    <table>
      <tbody>
        <StatisticsLine text="Good" value={good}/>
        <StatisticsLine text="Neutral" value={neutral}/>
        <StatisticsLine text="Bad" value={bad}/>
        <StatisticsLine text="All" value={all}/>
        <StatisticsLine text="Average" value={average}/>
        <StatisticsLine text="Positive" value={positive}/>
      </tbody>
    </table>
  )
}

const Button = ({handleClick, text}) => 
  <button onClick={handleClick}>{text}</button>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
    <FeedbackHeader/>
    <Button handleClick={() => setGood(good + 1)} text="Good"/>
    <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral"/>
    <Button handleClick={() => setBad(bad + 1)} text="Bad"/>
    <StatisticsHeader/>
    <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App