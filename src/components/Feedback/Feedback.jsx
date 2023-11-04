import React, { useState } from "react";
import Section from "../Section/Section";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";

const Feedback = () => {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleLeaveFeedback = (option) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [option]: prevFeedback[option] + 1,
    }));
  };

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positivePercentage = total === 0 ? 0 : (feedback.good / total) * 100;

  const options = ["good", "neutral", "bad"];

  return (
    <div>
      <Section title="Please leave your feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>

      {total > 0 ? (
        <Section title="Statistics">
          <Statistics
            good={feedback.good}
            neutral={feedback.neutral}
            bad={feedback.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Section title="Statistics">
          <p>There is no feedback</p>
        </Section>
      )}
    </div>
  );
};

export default Feedback;
