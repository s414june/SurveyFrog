import survey from "./data/survey.json";
import start from "./data/start.json";
import { MockMethod } from "vite-plugin-mock";

export default [
  {
    url: "/mock/survey",
    method: "get",
    response: () => {
      return survey;
    },
  },
  {
    url: "/mock/start",
    method: "get",
    response: () => {
      return start;
    },
  },
] as MockMethod[];
