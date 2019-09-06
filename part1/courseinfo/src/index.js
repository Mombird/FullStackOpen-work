import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';


const Header = (props) => {
	return (
	  <div>
		<h1>{props.courses}</h1>
	  </div>
	)
}


const Content = (props) => {
	const thispart = props.parts.map(parts => 
			 <Part part={parts} /> 
	)

	// console.log('in Content')
	// console.log(thispart)
	// console.log(props.parts)
	// console.log(<p>{props.parts[1].name} </p>)

	return(
	  <div>
		{thispart}
      </div>
	)
}

const Part = (props) => {
	return (
	  <div>
		<p>
		  {props.part.name} {props.part.exercises}
		</p>
	  </div>
	)
}



const Total = (props) => {
	let totals = 0
	// console.log(props)
	// console.log(props.total)
		props.total.forEach(part => totals = totals + part.exercises);

	return (
		<div>
		  <p>Number of exercises {totals}</p> 
		</div>
	)
}



const App = () => {
	const course = 'Half Stack application development'
	const parts= [
		{
			name: 'Fundamentals of React',
			exercises: 10
		},
		{
			name: 'Using props to pass data',
			exercises: 7
		},
		{
			name: 'State of a component',
			exercises: 14
		}
	]

	return (
		<div>
		  <Header courses={course} />

		  <Content parts={parts} />

		  <Total total={parts} /> 
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));

