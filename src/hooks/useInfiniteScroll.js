import { useState, useEffect } from "react";
import { STORY_INCREMENT, MAX_STORIES } from "../constants";

export const useInfiniteScroll = () => {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(STORY_INCREMENT);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      loading
    ) {
      return false;
    }
    setLoading(true);
  };

  //run every time the value of loading changes
  useEffect(() => {
    if (!loading) return;

    //maximum display is 500 stories
    if (count + STORY_INCREMENT >= MAX_STORIES) {
      setCount(MAX_STORIES);
    }
    //otherwise add story increment to current story display count
    else {
      setCount(count + STORY_INCREMENT);
    }

    setLoading(false);
  }, [loading]);

  //clean up event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { count };
};
