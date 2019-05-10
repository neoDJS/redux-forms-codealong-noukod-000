import React, { Component } from 'react'

class CreateTodo extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
  }
   
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    });
  };

  render() {
    return(
      <div>
        Create Todo Component
      </div>
    )
  }
}

export default CreateTodo;
