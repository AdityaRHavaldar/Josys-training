// 3.  Create a react component to apply fading effect to heading tag using useLayoutEffect()  hook.

import React, { useLayoutEffect, useRef } from "react";

const LayoutEffect: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const headingElement = headingRef.current;
    if (headingElement) {
      headingElement.style.opacity = "0";

      void headingElement.offsetHeight;

      headingElement.style.transition = "opacity 3s ease-in";

      headingElement.style.opacity = "1";
    }
  }, []);

  return (
    <div>
      <label>Assignment 3</label>
      <h1 ref={headingRef}>
        This Heading has Fading Effect, Will appear in 3 sec's
      </h1>
    </div>
  );
};

export default LayoutEffect;
