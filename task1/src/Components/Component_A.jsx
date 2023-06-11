import React from 'react';
import ComponentB from './Component_B';
import ComponentC from './Component_C';

function ComponentA() {
  return (
    <div style={{border:"1px solid gray",width:"50%",margin:"auto",borderRadius:"20px",height:"50vh",marginTop:"20px"}}>
      <div>
        <ComponentB />
      </div>
      <div style={{marginTop:"20px"}}>
        <ComponentC />
      </div>
    </div>
  );
}

export default ComponentA