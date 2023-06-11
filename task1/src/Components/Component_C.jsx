import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getText } from '../redux/actions';

function ComponentC() {
    const val = useSelector((store)=>store.Text)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getText())
    },[])
  return (
    <div>{val}</div>
  )
}

export default ComponentC