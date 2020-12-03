import React, { useState, useEffect } from "react";
import { getStoryIds } from "../services/hnApi";
import { Story } from "../components/Story";
import {
  GlobalStyle,
  StoriesContainerWrapper,
} from "../styles/StoriesContainerStyles";

export const StoriesContainer = () => {
  const [storyIds, setStoryIds] = useState([]);

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

  //loop over the stories
  return (
    <>
      <GlobalStyle></GlobalStyle>
      <StoriesContainerWrapper data-test-id="stories-container">
        <h1>Hacker News Stories</h1>
        {storyIds.map((storyId) => (
          <Story key={storyId} storyId={storyId} />
        ))}
      </StoriesContainerWrapper>
    </>
  );
};
