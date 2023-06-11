import { GET_TEXT , POST_TEXT} from "./actionType";

export const postText = (text)=>({
    type : POST_TEXT,
    payload : text
});

export const getText = ()=>({
    type : GET_TEXT
})