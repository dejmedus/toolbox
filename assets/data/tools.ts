export const tools = [
  {
    name: "Background Patterns",
    desc: "",
    url: "https://heropatterns.com",
  },
  {
    name: "Box Shadows",
    desc: "",
    url: "https://getcssscan.com/css-box-shadow-examples",
  },
  {
    name: "Hex to CSS Filter",
    desc: "",
    url: "https://isotropic.co/tool/hex-color-to-css-filter/",
  },
  {
    name: "CSS Gradients",
    desc: "",
    url: "https://cssgradient.io",
  },
  {
    name: "TailwindCSS Gradients",
    desc: "",
    url: "https://hypercolor.dev",
  },

  {
    name: "Google Fonts Finder",
    desc: "",
    url: "https://katydecorah.com/font-library/#!/wide",
  },
  {
    name: "NPM Fonts",
    desc: "",
    url: "https://fontsource.org/",
  },
  {
    name: "Emojis",
    desc: "",
    url: "https://emojipedia.org",
  },
  {
    name: "CSS loaders I",
    desc: "",
    url: "https://cssloaders.github.io",
  },
  {
    name: "CSS loaders II",
    desc: "",
    url: "https://loading.io/css/",
  },
  {
    name: "Icons I",
    desc: "",
    url: "https://uxwing.com",
  },
  {
    name: "SVGs",
    desc: "",
    url: "https://iconsvg.xyz",
  },
];

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
