import { useEffect } from "react";
import Prism from "prismjs";

import { snippets } from "../assets/data/snippets";
import styles from "@/styles/Snippets.module.css";

export default function Snippets() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <>
      <h2 id="snippets">Code Snippets</h2>
      <div className={styles.snippets}>
        {snippets.map((snippet, index) => {
          return (
            <details key={snippet.name}>
              <summary className={styles.summary}>{snippet.name}</summary>
              <div>
                <pre>
                  <code className={`language-${snippet.lang}`}>
                    {snippet.code}
                  </code>
                </pre>
              </div>
            </details>
          );
        })}
      </div>
    </>
  );
}
