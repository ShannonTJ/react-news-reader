import axios from "axios";
import { selectFields } from "../utils/selectField";

//parts of the url
export const baseUrl = `https://hacker-news.firebaseio.com/v0/`;
export const newStoriesUrl = `${baseUrl}newstories.json`;
export const storyUrl = `${baseUrl}item/`;

//get news story from the url + id
//only get non-null data
//only get the fields we want from selectFields()
export const getStory = async (storyId) => {
  const result = await axios
    .get(`${storyUrl + storyId}.json`)
    .then(({ data }) => data && selectFields(data));

  return result;
};

//get ids from the api
export const getStoryIds = async () => {
  const result = await axios.get(newStoriesUrl).then(({ data }) => data);
  return result;
};
