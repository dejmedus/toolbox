export const snippets = [
  {
    name: "typed.js",
    desc: "text typing effect",
    url: "https://github.com/mattboldt/typed.js/",
    lang: "jsx",
    code: `import { useEffect, useRef } from 'react'
  import Typed from "typed.js";
  
  export const Words = () => {
      // Create reference to store the DOM element containing the animation
      const el = useRef(null);
      // Create reference to store the Typed instance itself
      const typed = useRef(null);
      const words = ["beautiful", "useful", "accessible", "secure", "performant", ''];
  
      useEffect(() => {
          const options = {
              strings: words,
              typeSpeed: 80,
              backSpeed: 80,
              backDelay: 1500,
              showCursor: false,
              smartBackspace: false,
              // loop: true,
              // shuffle: true
          };
  
          // elRef refers to the <span> rendered below
          typed.current = new Typed(el.current, options);
  
          return () => {
              // Destroy Typed instance during cleanup
              // to prevent memory leaks
              typed.current.destroy();
          };
      }, []);
      return (
          <span style={{ whiteSpace: "pre" }} ref={el} />
      )
  }`,
  },
  {
    name: "gradient colored text",
    desc: "",
    url: "",
    lang: "css",
    code: `\/* text gradient *\/
  background-image: linear-gradient(60deg, #E21143, #FFB03A);
  background-clip: text;
  color: transparent;
  width:fit-content`,
  },
];
