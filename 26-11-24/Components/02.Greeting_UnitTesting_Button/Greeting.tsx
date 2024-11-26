// Component: Greeting.tsx
import React, { useState } from 'react';

 
const Greeting: React.FC  = () => {

 
const [uname, setUname]    = useState<string>("");
 

const buttonClick = () => {
    setUname("Narasimha");
};

  return ( <>       
            
           <button  data-testid="button1" onClick={buttonClick}>Get Data</button>
            <h1 id="x">Welcome to {uname}</h1>
  
  </>);
  
};

export default Greeting;

