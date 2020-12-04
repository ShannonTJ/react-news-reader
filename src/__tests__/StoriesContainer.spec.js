import React from "react";
import { act } from "react-dom/test-utils";
import { StoriesContainer } from "../containers/StoriesContainer";
import { render, cleanup, waitFor } from "@testing-library/react";
import { storyIds, singularStory } from "../fixtures";
import { getStory, getStoryIds } from "../services/hnApi";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { STORY_INCREMENT } from "../constants";

beforeEach(cleanup);

jest.mock("../hooks/useInfiniteScroll");
jest.mock("../services/hnApi", () => ({
  getStory: jest.fn(),
  getStoryIds: jest.fn(),
}));

test("renders the story container with a story", async () => {
  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,
  }));

  getStory.mockImplementation(() => Promise.resolve(singularStory));
  getStoryIds.mockImplementation(() => Promise.resolve(storyIds));

  const { getByText, queryByTestId } = render(<StoriesContainer />);
  await waitFor(() => [
    expect(getByText("Hacker News Stories")).toBeTruthy(),
    expect(getByText("Something Title")).toBeTruthy(),
    expect(queryByTestId("story-by").textContent).toEqual("By: Shan"),
  ]);
});
