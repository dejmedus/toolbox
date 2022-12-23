import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "../components/Card";
import { tools, snippets } from "../assets/data/tools";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>tools</title>
        <meta name="description" content="useful web dev tools" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <h1>Tools 🛠️</h1>
        <div className={styles.grid}>
          {tools.map((tool) => {
            return (
              <Card
                key={tool.name}
                name={tool.name}
                url={tool.url}
                desc={tool.desc}
              />
            );
          })}
        </div>
        {/* {snippets.map((snippet: any) => {
          return (
            <>
              <p>{snippet.name}</p>
              <div className={styles.code}>{snippet.code}</div>
            </>
          );
        })} */}
      </main>
    </div>
  );
}
