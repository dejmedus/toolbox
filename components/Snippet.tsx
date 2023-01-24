import styles from "@/styles/Snippet.module.css";

type SnippetProps = {
  code: string;
  lang: string;
  name: string;
};

const Snippet = ({ name, code, lang }: SnippetProps) => {
  return (
    <details key={name}>
      <summary className={styles.summary}>{name}</summary>
      <div>
        <pre>
          <code className={`language-${lang}`}>{code}</code>
        </pre>
      </div>
    </details>
  );
};

export default Snippet;
