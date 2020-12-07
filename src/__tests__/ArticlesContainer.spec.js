import React from "react";
import { ArticlesContainer } from "../containers/ArticlesContainer";
import { MockedProvider } from "@apollo/react-testing";
import { render, cleanup, waitFor } from "@testing-library/react";
import { allArticles, noArticles } from "../fixtures";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";
import { STORY_INCREMENT } from "../constants";
import { GET_ALL_ARTICLES } from "../graphql/get-all-articles";

beforeEach(() => {
  cleanup();
  jest.resetAllMocks();
});

jest.mock("../hooks/useInfiniteScroll");

test("renders the <ArticlesContainer/> with articles", async () => {
  const allArticlesMocks = [
    {
      request: {
        query: GET_ALL_ARTICLES,
      },
      result: {
        data: {
          ...allArticles,
        },
      },
    },
  ];

  useInfiniteScroll.mockImplementation(() => ({
    count: STORY_INCREMENT,
  }));

  const { getByText, queryByTestId } = render(
    <MockedProvider mocks={allArticlesMocks}>
      <ArticlesContainer />
    </MockedProvider>
  );
  await waitFor(() => [
    expect(getByText("News Stories")).toBeTruthy(),
    expect(getByText("Something Title")).toBeTruthy(),
    expect(queryByTestId("article-author").textContent).toEqual("By: Shan"),
  ]);
});
