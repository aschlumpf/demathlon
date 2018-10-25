import React, { Component } from 'react';

export class GamePage extends Component {
  constructor(props) {
    super(props);
    this.handleChoiceClick = this.handleChoiceClick.bind(this);
    this.handleResponse = this.handleResponse.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      userChoice = undefined,
      streak = 0,
      curr_problem = 0,
    }
  }

  problems = [
    {
      question: "1 + 1",
      answer: 2,
      choices: [11, 1, 2, 4],
    },
  ];

  colors = [
    "#EED6D6",
    "#6FFF98",
    "#FAFCAF",
    "#44DCE5",
  ];

  handleChoiceClick(choice) {
    this.setState({
      userChoice: choice,
    });
    this.handleSubmit();
  }

  handleInput(inputValue) {
    console.log(inputValue);
    this.setState({
      userChoice: inputValue,
    });
  }

  handleSubmit() {
    const { curr_problem, userChoice, streak } = this.state;
    // Check if correct
    const problem = this.problems[curr_problem];
    const correct_answer = problem.answer;
    if (userChoice == correct_answer) {
      this.setState({
        streak: streak + 1,
        curr_problem: curr_problem + 1,
      });
    } else {
      this.setState({
        streak: 0,
        curr_problem: curr_problem + 1,
      });
    }
  }

  render() {
    const { curr_problem, streak } = this.state;
    const problem = this.problems[curr_problem];
    return (
      <div className="Game">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div>
          <div className="Streak-Meter">
            <StreakMeter streak={streak} />
          </div>
          <div className="Game-Problem">
            <p>{problem.question} = </p>
            <input
                type="text"
                onKeyUp={e => his.handleInput(e.target.value)} />
            <button onClick={this.handleSubmit} />
            {problem.choices.map((c, idx) =>
              <Choice
                  color={this.colors[idx]}
                  value={c}
                  onClick={() => this.handleChoiceClick(c)} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
