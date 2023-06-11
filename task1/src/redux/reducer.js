import {GET_TEXT,POST_TEXT} from "./actionType";

const initialState = {
    Text : ""
}

export const Reducer = (state=initialState,{type,payload})=>{
    switch (type) {
      case POST_TEXT: {
        return {
          ...state,
          Text: payload,
        };
      }
      case GET_TEXT: {
        return {
          ...state,
        };
      }
      default: {
        return state;
      }
    }
}