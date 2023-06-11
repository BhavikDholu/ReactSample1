import React, { useState } from 'react'
import {useDispatch} from "react-redux";
import {postText} from "../redux/actions";

function ComponentB() {
    const [text,setText] = useState("");
    const dispatch = useDispatch();

    const handleChange = (event) => {
      const val = event.target.value;
      setText(val)
      dispatch(postText(val));
    };
  return (
    <div>
        <input type="text" placeholder='type here...' value={text} onChange={handleChange}/>
    </div>
  )
}

export default ComponentB