import React, { Component } from "react";
import { Wrapper } from "./App.styled";
import  Section  from "./components/Section";
import FeedbackOptions from "./components/FeedbackOptions";
import Statistics from "./components/Statistics";
import Notification from "./components/Notification";


class App extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((accumulator, value) =>
    accumulator + value, 0);
  };


  handleIncrement = (option) => {
    this.setState((prevState) => ({
      [option]: prevState[option] + 1
    }));
  }




  countPositiveFeedbackPercentage = () => {
    return Math.round((100 * this.state.good) / this.countTotalFeedback());
  };


  render() {
  
    const { good, neutral, bad } = this.state;

    return (
      <Wrapper>
      <Section title={"Pease leave feedback"}>
 <FeedbackOptions
        options={Object.keys(this.state)}
        onLeaveFeedback={this.handleIncrement}
      />
      </Section>

      <Section title="Statistics">
          {this.countTotalFeedback() ? (
<Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={this.countTotalFeedback()}
          positiveFeedbackPercentage={this.countPositiveFeedbackPercentage()} />) :
            (
              <Notification message={"There is no feedback"}/>
          )}
      </Section>
       </Wrapper> 
    )
  }
}
 
   

export default App;