import { tools } from "../assets/data/tools";
import styles from "../styles/Tools.module.css";

export default function Tools() {
  return (
    <>
      <h2 id="tools">Frontend Tools</h2>
      <div className={styles.grid}>
        {tools.map((tool) => {
          return (
            <a
              key={tool.name}
              href={tool.url}
              className={styles.card}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h2>{tool.name}</h2>
            </a>
          );
        })}
      </div>
    </>
  );
}
