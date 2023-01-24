import styles from "@/styles/Snippet.module.css";

type SnippetProps = {
  code: string;
  lang: string;
  name: string;
  open: boolean;
};

const Snippet = ({ name, code, lang, open }: SnippetProps) => {
  return (
    <details open={open}>
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
