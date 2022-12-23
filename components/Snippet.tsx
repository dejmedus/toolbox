
type SnippetProps = {
    code: string;
    lang: string
};

const Snippet = ({ code, lang }: SnippetProps) => {

  return (
    <pre>
    {/* <pre className={`line-numbers`}></pre> */}
      <code className={`language-${lang}`}>{code}</code>
    </pre>
  );
};

export default Snippet;
