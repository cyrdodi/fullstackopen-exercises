import { useState } from 'react'
function App() {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [score, setScore] = useState(new Uint8Array(anecdotes.length)) //set initial value of scores to be an array with total length of anecdotes, and value of 0


  const handleNext = () => {
    // set random number when user click next
    const randNumber = Math.floor(Math.random() * anecdotes.length - 0)
    // set selected state with a new copy of random number
    setSelected(randNumber)
    console.log('random', selected)
  }


  const handleVote = () => {
    // create new copy of vote
    const copy = [...score]
    copy[selected] += 1
    setScore(copy)
  }

  console.log('score', score)

  const mostVoted = score.indexOf(Math.max(...score))
  console.log('most voted', mostVoted)

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <div>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleNext}>Next Anecdote</button>
      </div>
      <h2>Anecdote with most votes (score: {score[mostVoted]})</h2>
      {/* if max score is 0 then hide most voted anecdotes */}
      {Math.max(...score) === 0 ? <p>vote the anecdote</p> : <p>{anecdotes[mostVoted]}</p>}
    </div>
  )
}

export default App
