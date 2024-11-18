// 3.  Create a react component to apply fading effect to heading tag using useLayoutEffect()  hook.

import React, { useLayoutEffect, useState, useRef } from "react";

const LayoutEffect: React.FC = () => {
  const [opacity, setOpacity] = useState(0);
  const headingRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const headingElement = headingRef.current;
    if (headingElement) {
      setOpacity(1);

      setTimeout(() => {
        headingElement.style.transition = "opacity 3s ease-in";
      }, 0);
    }
  }, []);

  return (
    <div>
      <label>Assignment 3</label>
      <h1 ref={headingRef} style={{ opacity }}>
        This Heading has Fading Effect, Will appear in 3 sec's
      </h1>
    </div>
  );
};

export default LayoutEffect;
