import React from 'react';
import './States.css';

/**
 * Define States, a React component of Project 4, Problem 2. The model
 * data for this view (the state names) is available at
 * window.models.states.
 */
class States extends React.Component {
  constructor(props) {
    super(props);
    this.state = { substring: "", filteredStates: [] }; // Initialize state
    console.log('window.models.states', window.models.states);
  }

  componentDidMount() {
    this.handleSubmit(new Event("submit"));
  }  

  handleChange = (event) => {
    this.setState({ substring: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { substring } = this.state;
    const states = window.models.states() || [];

    const filteredStates = states
      .filter((state) => state.toLowerCase().includes(substring.toLowerCase()))
      .sort();

    this.setState({ filteredStates });
  };

  render() {
    return (
      <div>
        <h2>State Search</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Enter a substring..."
            value={this.state.substring}
            onChange={this.handleChange}
          />
          <button type="submit">Search</button>
        </form>

        <p>Filtering by: <strong>{this.state.substring || "All States"}</strong></p>

        {this.state.filteredStates.length > 0 ? (
          <ul>
            {this.state.filteredStates.map((state, index) => (
              <li key={index}>{state}</li>
            ))}
          </ul>
        ) : (
          <p>No matching states found!!!.</p>
        )}
      </div>
    );
  }
}

export default States;