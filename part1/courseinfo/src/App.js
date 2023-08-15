const Part = (props) => {
  return (
    <div>
     <p>{props.part.name} {props.part.exercises}</p>
    </div>
  )
}

const Header = (props) => {
  return (
    <div>
      <p>{props.course}</p>
    </div>
  )
}
const Content = (props) => {
  // 
  console.log(props.parts.length)
  return (
    <div>
      {props.parts.map(part  => <Part part={part} />)  }
    </div>
  )
}
const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.totalExercises}</p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = 
    [
      {
        name: "Fundamentals of React",
        exercises : 10
      },
      {
        name : "Using props to pass data",
        exercises: 7
      },
      {
        name: "State of a component",
        exercises: 14
      }
    ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total totalExercises={parts.forEach(part => console.log(part.exercises))} />
    </div>
  )
}

export default App