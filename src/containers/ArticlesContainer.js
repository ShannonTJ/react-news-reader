import React from "react";
import { getStoryIds } from "../services/hnApi";
import { Article } from "../components/Article";
import {
  GlobalStyle,
  ArticlesContainerWrapper,
} from "../styles/ArticlesContainerStyles";
import { useInfiniteScroll } from "../hooks/useInfiniteScroll";

export const ArticlesContainer = () => {
  const { count } = useInfiniteScroll();
  const [storyIds, setStoryIds] = useState([]);
  const test = useInfiniteScroll();

  useEffect(() => {
    getStoryIds().then((data) => setStoryIds(data));
  }, []);

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
