import React, { Component } from 'react';

class ToDo extends Component {
  render() {
    return (
      <li>
      <input type="checkbox" checked={ this.props.isCompleted } onChange={ this.props.toggleComplete } />
      <span>{ this.props.description }</span>
      </li>
    );
  }
}

class Button extends React.Component {
	render() {
		const{
			variant,
			content
		}= this.props; 

		return{
			<button className="Delete">
			</button>
			)
		}
	}
}

React.render(
	<div>
		<Button content="Delete" variant="red" />
		document.getElementById('root')
	); 


export default ToDo;


