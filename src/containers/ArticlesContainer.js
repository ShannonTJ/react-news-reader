import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Article } from "../components/Article";
import {
  GlobalStyle,
  ArticlesContainerWrapper,
} from "../styles/ArticlesContainerStyles";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export const ArticlesContainer = () => {
  const { count } = useInfiniteScroll();
  const test = useInfiniteScroll();

  const { data: { allArticles = [] } = ({} = useQuery(GET_ALL_ARTICLES)) };

  //loop over the Articles
  return (
    <>
      <GlobalStyle />
      <ArticlesContainerWrapper data-test-id="articles-container">
        <h1>News Stories</h1>
      </ArticlesContainerWrapper>
    </>
  );
};
