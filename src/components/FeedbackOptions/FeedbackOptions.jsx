import React from "react";
import { ButtonFeedbackOption } from "./FeedbackOptions.styled";

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((option) => (
      <ButtonFeedbackOption
        key={option}
        onClick={() => onLeaveFeedback(option)}
      >
        {option}
      </ButtonFeedbackOption>
    ))}
  </div>
);

export default FeedbackOptions;
