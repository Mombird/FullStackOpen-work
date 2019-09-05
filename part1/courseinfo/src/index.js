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
	return(
	  <div>
		<Part part={props.p1} exer={props.exer1} />
		<Part part={props.p2} exer={props.exer2} />
		<Part part={props.p3} exer={props.exer3} />
      </div>
	)
}

const Part = (props) => {
	return (
	  <div>
		<p>
		  {props.part} {props.exer}
		</p>
	  </div>
	)
}



const Total = (props) => {
	return (
		<div>
		  <p>Number of exercises {props.total}</p> 
		</div>
	)
}



const App = () => {
	const course = 'Half Stack application development'
	const part1= 'Fundamentals of React'
	const exercises1 = 10
	const part2 = 'Using props to pass data'
	const exercises2 = 7
	const part3 = 'State of a component'
	const exercises3 = 14

	return (
		<div>
		  <Header courses={course} />

		  <Content p1={part1} exer1={exercises1} 
			  p2={part2} exer2={exercises2}
			  p3={part3} exer3={exercises3} />

		  <Total total={exercises1 + exercises2 + exercises3} /> 
		</div>
	)
}

ReactDOM.render(<App />, document.getElementById('root'));

