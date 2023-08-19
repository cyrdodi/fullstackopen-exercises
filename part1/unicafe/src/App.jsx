import { useState } from 'react'

const Statistics = (props) => {
  if (props.total === 0) {
    return (
      <div>No feedback given</div>
    )
  }
  return (
    <>
      <table>
        <tbody>
          <StatisticsLine text="good" value={props.good} />
          <StatisticsLine text="neutral" value={props.neutral} />
          <StatisticsLine text="bad" value={props.bad} />
          <StatisticsLine text="total" value={props.total} />
          <StatisticsLine text="average" value={props.average} />
          <StatisticsLine text="positive" value={props.positive} />
        </tbody>
      </table>
    </>
  )
}

const StatisticsLine = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td> {props.value}</td>
    </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const scoreGood = 1;
  const scoreNeutral = 0;
  const scoreBad = -1;

  const total = good + neutral + bad
  const average = ((good * scoreGood) + (neutral * scoreNeutral) + (bad * scoreBad)) / total
  const positive = ((good / total) * 100) + ' %'

  return (
    <>
      <h2>Give Feedback</h2>

      {/* button */}
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>

      <h2>Statistics</h2>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </>
  )
}

export default App
